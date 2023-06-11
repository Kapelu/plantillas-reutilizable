/*
$ Objeto XMLHttpRequest 
*/

;(() => {
	const xhr = new XMLHttpRequest()
	$xhr = document.getElementById('xhr')
	$fragment = document.createDocumentFragment()

	xhr.addEventListener('readystatechange', (e) => {
		if (xhr.readyState !== 4) return
		if (xhr.status >= 200 && xhr.status < 300) {
			//console.log(xhr)
			//console.log('Exito')
			//console.log(xhr.responseText);
			//$xhr.innerHTML = xhr.responseText
			let json = JSON.parse(xhr.responseText)
			//console.log(json)

			json.forEach((el) => {
				const $li = document.createElement('li')
				$li.innerHTML = `${el.name} --${el.email} --${el.phone}`
				//console.log($li)
				$fragment.appendChild($li)
			})
			$xhr.appendChild($fragment)
		} else {
			//console.log('Error')
			let message = xhr.statusText || 'Ocurrio un error!!!'
			$xhr.innerHTML = `Error ${xhr.status}: ${message}`
		}

		//console.log('Este mensage cargará de cualquier forma')
	})

	/* Directo de la API */
	xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

	/* De manera local */
	//xhr.open('GET', 'assets/users.json' )
	xhr.send()
})()

/*
$ API Fetch 
*/
;(() => {
	const $fetch = document.getElementById('fetch')
	$fragment = document.createDocumentFragment()

	fetch('https://jsonplaceholder.typicode.com/users')
		.then((res) => {
			//console.log(res)
			return res.ok ? res.json() : Promise.reject(res)
		})
		.then((json) => {
			//console.log(json);
			json.forEach((el) => {
				const $li = document.createElement('li')
				$li.innerHTML = `${el.name} --${el.email} --${el.phone}`
				//console.log($li)
				$fragment.appendChild($li)
			})
			$fetch.appendChild($fragment)
		})
		.catch((err) => {
			//console.log('Estamos en el catch',err)
			//console.log('Error')
			//let message = fetch.statusText || 'Ocurrio un error!!!'
			//$fetch.innerHTML = `Error ${xhr.status}: ${message}`
		})
		.finally(() => {
			//console.log('Este mensage desde fetch')
		})
})()

/*
$ API Fetch - async-await
*/
;(() => {
	const $fetchAsync = document.getElementById('fetch-async')
	const $fragment = document.createDocumentFragment()

	async function getData() {
		try {
			let res = await fetch('https://jsonplaceholder.typicode.com/users')
			let json = await res.json()

			//console.log(res, json)

			//if(!res.ok) throw new Error('Ocurrio un ERROR al solicitar los datos')
			if (!res.ok) throw {status: res.status, statusText: res.statusText}

			json.forEach((el) => {
				const $li = document.createElement('li')
				$li.innerHTML = `${el.name} --${el.email} --${el.phone}`
				//console.log($li)
				$fragment.appendChild($li)
			})
			$fetchAsync.appendChild($fragment)
		} catch (error) {
			let message = error.statusText || 'Ocurrio un error!!!'
			$fetchAsync.innerHTML = `Error ${error.status}: ${message}`
		} finally {
			//console.log('Este mensage desde fetch Asyn-await')
		}
	}

	getData()
})()

/*
$ AJAX - AXIOS
*/
;(() => {
	const $axios = document.getElementById('axios')
	$fragment = document.createDocumentFragment()

	axios
		.get('https://jsonplaceholder.typicode.com/users')

		.then((res) => {
			//console.log(res)
			let json = res.data
			json.forEach((el) => {
				const $li = document.createElement('li')
				$li.innerHTML = `${el.name} --${el.email} --${el.phone}`
				//console.log($li)
				$fragment.appendChild($li)
			})
			$axios.appendChild($fragment)
		})
		.catch((err) => {
			//console.log(err.response)
			let message = err.response.statusText || 'Ocurrio un error!!!'
			$axios.innerHTML = `Error ${err.response.status}: ${message}`
		})
		.finally(() => {
			//console.log('Esto se ejecutara independientemente del resultado de Axios')
		})
})()

/*
$ AJAX - AXIOS async-await
*/
;(() => {
	const $axiosAsync = document.getElementById('axios-async')
	$fragment = document.createDocumentFragment()

	async function getData() {
		try {
			let res = await axios.get('https://jsonplaceholder.typicode.com/users')
			let json = await res.data

			json.forEach((el) => {
				const $li = document.createElement('li')
				$li.innerHTML = `${el.name} --${el.email} --${el.phone}`
				//console.log($li)
				$fragment.appendChild($li)
			})
			$axiosAsync.appendChild($fragment)

			console.log(res, json)
		} catch (error) {
			console.log(error.response)
			let message = error.response.statusText || 'Ocurrio un error!!!'
			$axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`
		} finally {
			console.log('Esto se ejecutara dentro del try...catch')
		}
	}
	getData()
})()