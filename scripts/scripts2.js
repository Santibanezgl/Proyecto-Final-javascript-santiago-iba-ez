/* ARCHIVO JS QUE CORRESPONDE A FAVORITOS.HTML */
const InicioFav = document.querySelector ("#iniciofav")

const cerrarSesion2 = document.querySelector("#logoutfavoritos")
/* local storage */
const infoAlLs = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const obtenerDelLs = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

/* validar si esta logueado para ver favoritos */
const validarfav = (valor) => {
    if (valor === null){
        window.location.href = "iniciarsesion.html";
    } else console.log ("Se ha logueado, puede ver sus favoritos")
}
validarfav (obtenerDelLs("login"))


/* desaparecer boton de login pagina favoritos */
const validarLoginJs2 = (valor) =>{
    if (valor === true){
InicioFav.style.display = "none"
cerrarSesion2.style.display = "block"
    }
}
validarLoginJs2 (obtenerDelLs("login"))

/* cerrar sesion con click */
cerrarSesion2.addEventListener("click", () => {
    localStorage.removeItem("login")
    window.location.href = "iniciarsesion.html";
})
