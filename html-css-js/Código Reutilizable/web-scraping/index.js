const cheerio = require('cheerio')
const request = require('request-promise')

async function init() {
	const $ = await request({
		uri: 'xxxxxxxx',
		transform: (body) => cheerio.load(body),
	})

	const websiteTitle = $('h1')
	console.log(websiteTitle.html())

    const prodData = $('.product-data-sheet-content')
    console.log(prodData.html());
}

init()
