import responsiveMedia from "./objeto-responsivo.js"

const d = document

d.addEventListener('DOMContentLoaded', (e)=>{
    responsiveMedia('youtube', '(min-width: 1024px', 'Contenido Móvil', 'Contenido Escritorio' )
})