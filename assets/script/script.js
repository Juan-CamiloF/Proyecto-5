function color(tema) {
    localStorage.setItem("color",tema)
    let contenedor =document.getElementById("contenedor")
    switch (tema) {
        case 'dark':
            contenedor.classList.add("dark");
            contenedor.classList.remove("light","pink")
            break;
        case 'light':
            contenedor.classList.remove("dark","pink")
            break;
        case 'pink':
            contenedor.classList.add("pink");
            contenedor.classList.remove("light","dark")
            break;
        default:
    }
}
contenedor.classList.add(localStorage.getItem("color"))