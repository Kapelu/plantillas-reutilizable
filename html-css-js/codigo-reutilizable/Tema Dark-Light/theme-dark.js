const d = document
const ls = localStorage

export default function darkTheme(btn, classDark) {
	const $themeBtn = d.querySelector(btn)
	const $selectors = d.querySelectorAll('[data-dark]')
	console.log($selectors)

	let moon = '🌙'
	let sun = '☀️'
	console.log($themeBtn.textContent)

	const ligthMode = () => {
		$selectors.forEach((el) => el.classList.remove(classDark))
		$themeBtn.textContent = moon
		ls.setItem('theme', 'light')
	}
	const darkMode = () => {
		$selectors.forEach((el) => el.classList.add(classDark))
		$themeBtn.textContent = sun
		ls.setItem('theme', 'dark')
	}

	d.addEventListener('click', (e) => {
		if (e.target.matches(btn)) {
			if ($themeBtn.textContent === moon) {
				darkMode()
			} else {
				ligthMode()
			}
		}
	})
	/* Pregunta al localStorage si existe una variable que controla el tema y en base a eso aplique los estilos correspondiente */
	d.addEventListener('DOMContentLoaded', (e) => {
		if (ls.getItem('theme') === null) ls.setItem('theme', 'light')
		if (ls.getItem('theme') === 'light') ligthMode()
		if (ls.getItem('theme') === 'dark') darkMode()
	})
}
