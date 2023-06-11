import api from './wp_api.js'
import { SearchCard } from "../components/SearchCard.js"
import { PostCard } from '../components/PostCard.js'
import { ajax } from './ajax.js'

export async function InfiniteScroll(){
    const d = document
    const w = window

    let query = localStorage.getItem('wpSearch'),
    apiURL,
    Component 

    w.addEventListener('scroll', async (e)=> {
        let { scrollTop, clientHeight, scrollHeight } = d.documentElement,
        { hash } = w.location

        //console.log(scrollTop, clientHeight, scrollHeight, hash);

        if ( scrollTop + clientHeight +100 >= scrollHeight){
            api.page++

            if(!hash || hash === '#/'){
                apiURL = `${api.POSTS}&page=${api.page}`
                Component = PostCard
            } else if (hash.includes('#/search')){
                apiURL= `${api.SEARCH}${query}&page=${api.page}`
                Component = SearchCard
            } else {
                return false
            }

            d.querySelector('.loader').style.display = 'block'

            await ajax({
                url: apiURL,
                cbSuccess: (post) =>{
                    //console.log(post);
                    let html =''
                    post.forEach((post) => (html += Component(post)))
                    d.getElementById('main').insertAdjacentHTML('beforeend',html)
                    d.querySelector('.loader').style.display = 'none'
                }
            })
        }
    })
}