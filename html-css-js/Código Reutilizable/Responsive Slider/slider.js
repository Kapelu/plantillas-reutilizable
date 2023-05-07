export default function slider() {
	const sliderImages = [
		'./assets/imagen2.png',
		'./assets/imagen3.png',
		'./assets/imagen4.png',
		'./assets/imagen5.png',
	]

	//console.log(sliderImages[0])

	const $sliderContent = document.getElementById('sliderContent')
	 //console.log($sliderContent.querySelector('img'))

	let contador = 1

	function reset() {
		if (contador >= sliderImages.length) {
			contador = 0
		}
	}
	const intervarImgs = setInterval(() => {
		$sliderContent
			.querySelector('img')
			.setAttribute('src', sliderImages[contador])
		contador++
		reset()
		// console.log(contador)
	}, 5000)

	document.addEventListener('click', (e) => {
		if (e.target.matches('#next')) {
			$sliderContent
				.querySelector('img')
				.setAttribute('src', sliderImages[contador])
			contador++
			reset()
			
		}

		if (e.target.matches('#back')) {
			contador--
			if (contador <= 0) {
				contador = sliderImages.length
			}
			$sliderContent
				.querySelector('img')
				.setAttribute('src', sliderImages[contador - 1])
		}
	})
}
