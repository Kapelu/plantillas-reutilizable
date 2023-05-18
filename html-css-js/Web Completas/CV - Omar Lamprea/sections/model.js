const urlParams = new URLSearchParams(window.location.search);
const card = urlParams.get('card');

document.getElementById('nav-'+ card).style.display = 'flex'
document.getElementById('card-' + card).style.display = 'block'

if(card === 'developer'){
  window.addEventListener('load', (e)=>{
    // dynamic certificates  
    const $templateCertificate = document.getElementById('template-certificate').content,
          $fetch = document.getElementById('certificates'),
          $fragment = document.createDocumentFragment();
    // console.log($templateCertificate)
    
    async function getData(){
      try{
        let contador = 1
        let res = await fetch('certificates.json')
        let json = await res.json()
        
        if(!res.ok) throw {status: res.status, statusText:res.statusText}

        
        json.forEach(el => {
          // console.log(el.title)
          $templateCertificate.querySelector('img').setAttribute('src', el.img)
          $templateCertificate.querySelector('img').setAttribute('alt', el.title)
          $templateCertificate.querySelector('section').setAttribute('id', el.id + contador)
          contador++
          let $clone = document.importNode($templateCertificate, true)
          $fragment.appendChild($clone)
        })
        $fetch.appendChild($fragment)


        // Overlay Boxes

        const boxes = document.querySelectorAll('.box-certs')
        // console.log(boxes)
        
        boxes.forEach(box =>{
          box.addEventListener('mouseover', (e)=> box.querySelector('.overlay-imgs').style.display = 'flex')
          box.addEventListener('mouseout', (e)=> box.querySelector('.overlay-imgs').style.display = 'none')
          box.addEventListener('click', (w)=>{
            const overlayPage = document.getElementById('overlay-page')
            const modal = document.getElementById('modal')

            const im = box.querySelector('img').getAttribute('src')
            document.getElementById('modal-certs-imgs').setAttribute('src', im)

            overlayPage.style.display = 'flex'
            modal.style.display = 'flex'
          
            const closeModal = document.getElementById('hide-modal')
            closeModal.addEventListener('click',hideModal)
          
            function hideModal(){
              overlayPage.style.display = 'none'
              modal.style.display = 'none'
            }
          })
        })
      }catch(err){
        console.log(err)
        let message = err.statusText || 'Ocurrió un error!'
        $fetch.innerHTML = `Error ${err.status}: ${message}`
      }
    }
    getData();
  })
}