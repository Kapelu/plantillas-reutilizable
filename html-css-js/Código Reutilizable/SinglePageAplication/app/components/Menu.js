export function Menu(){
    const $menu = document.createElement('nav')
    $menu.classList.add('menu')
    $menu.innerHTML = `
        <a href="#/">HOME</a>
        <span></span>
        <a href="#/search">Búsqueda</a>
        <span></span>
        <a href="#/contact">Contact</a>
        <span></span>
        <a href="http://danielcalderon.vercel.app" target="_blank" rel="noopener">Kapelu</a>
    `
    return $menu
}