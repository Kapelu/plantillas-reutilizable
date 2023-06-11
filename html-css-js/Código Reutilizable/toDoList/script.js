const d = document

// El estate (estado)
const state = {
	todoList: [],
}

// Template UI
const template = () => {
	if (state.todoList.length < 1) {
		return `<p><em>Lista sin tareas por hacer</em></p>`
	}
	let todos = state.todoList.map((item) => `<li>${item}</li>`).join('')
	return todos
}

// Render UI
const render = () => {
	console.log(state)
	const $list = d.getElementById('todo-list')
	if (!$list) return
	$list.innerHTML = template()
}

// Actualizar el State de forma reactiva
const setState = (obj) => {
	for(let key in obj){
		if(state.hasOwnProperty(key)){
			state[key]=obj[key]
		}
	}

	render()
}

// Obtenemos una copia inmutable del State
//?JSON. stringify(): convierte un objeto o valor de JavaScript en una cadena de texto JSON
//?JSON. parse() analiza una cadena de texto como JSON.
const getState = ()=>JSON.parse(json.stringify(state))



d.addEventListener('DOMContentLoaded', render)

// Estableciendo valores por defecto al State
setState({
	todoList: ['Tarea 1','Tarea 2','Tarea 3']
})

d.addEventListener('submit', (e) => {
	if (!e.target.matches('#todo-form')) return false

	e.preventDefault()

	const $item = d.getElementById('todo-item')
	if (!$item) return

	state.todoList.push($item.value)
	render()

	// limpiar el input
	$item.value = ''
	$item.focus()
})
