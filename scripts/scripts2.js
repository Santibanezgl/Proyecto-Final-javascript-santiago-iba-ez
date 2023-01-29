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

/* modo oscuro */
const modoOscuro = document.querySelector("#Oscuro")
    const modoClaro = document.querySelector("#Claro")
    const letras = document.querySelectorAll(".whitefav")
    const fondoNegro = document.querySelectorAll(".fondoNegrofav")


    modoOscuro.onclick = () => {
        infoAlLs("modoOscuro" , "activo")
        if (obtenerDelLs("modoOscuro", "activo" )) {
           letras.forEach(elementos => {
            elementos.style.color ="white";
           })
           fondoNegro.forEach(elements => {
            elements.style.backgroundColor = "white";
           })
        }
    }

    modoClaro.onclick = () => {
        infoAlLs("modoOscuro" , "desactivado")
        if (obtenerDelLs("modoOscuro", "desactivado" )) {
            letras.forEach(elementos => {
                elementos.style.color ="white";
               })
               fondoNegro.forEach(elements => {
                elements.style.backgroundColor = "black";
               })
        }
    }

    const validar = (valor) =>{
        if (valor === "activo" ) {
            letras.forEach(elementos => {
                elementos.style.color ="white";
            })
            fondoNegro.forEach(elementos => {
                elementos.style.backgroundColor = "black";
            })
        } else if (valor === "desactivado") {
            letras.forEach(elementos => {
                elementos.style.color ="black";
            })
            fondoNegro.forEach(elementos => {
                elementos.style.backgroundColor = "white";
            })
        }
     }
     
     validar(obtenerDelLs("modoOscuro"))