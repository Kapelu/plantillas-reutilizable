import responsiveMedia from "./objeto-responsivo.js"

const d = document

d.addEventListener('DOMContentLoaded', (e)=>{
    responsiveMedia('youtube', '(min-width: 1024px', `<a href='https://www.youtube.com/watch?v=OZfgQGvnmYM' target='_blank' rel='noopener'> Ver Video</a>`, `<iframe width="560" height="315" src="https://www.youtube.com/embed/OZfgQGvnmYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>` )
    responsiveMedia('gmaps', '(min-width: 1024px', `<a href='https://goo.gl/maps/tDYwEVHpqgyjheUN6?coh=178573&entry=tt' target='_blank' rel='noopener'> Ver Mapa</a>`, `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.3936626469565!2d-68.4662332001951!3d-33.19344976028874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e5c2f7b0b81f7%3A0xb1b4fab4778e2eef!2sCine%20Ducal!5e0!3m2!1ses!2sar!4v1683331508572!5m2!1ses!2sar" width="560" height="315" style="border:2px solid grey;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` )
})


