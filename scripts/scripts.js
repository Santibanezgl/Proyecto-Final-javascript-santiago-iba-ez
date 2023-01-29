/* datos de cuenta */
const datosUsuario = {
    user: "santiago",
    password: "golosinas"
}

/* seleccion de inputs */
const formLogin = document.querySelector("#login")

const inputUser = document.querySelector("#input-user")

const inputPass = document.querySelector("#input-pass")

const contenedorFormulario = document.querySelector("#contenedorPrincipal")

const Inicio = document.querySelector("#Inicio")

const cerrarSesion = document.querySelector("#logout")


/* prevent default y validacion */
formLogin.onsubmit = (e) => {
e.preventDefault()
if (inputUser.value === datosUsuario.user && inputPass.value === datosUsuario.password) {
  infoAlLs("login", true)
contenedorFormulario.style.display = "none"
Inicio.style.display = "none"
cerrarSesion.style.display = "block"
} 
}



/* local storage */
const infoAlLs = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

const obtenerDelLs = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

/* validar el true del local storage */ 

const validarTrue = (valor) =>{
    if (valor === true) {
        contenedorFormulario.style.display = "none"
        Inicio.style.display = "none"
cerrarSesion.style.display = "block"
    }
}

validarTrue (obtenerDelLs("login"))

/* cerrar sesion con click */
cerrarSesion.addEventListener("click", () => {
    localStorage.removeItem("login")
    window.location.href = "iniciarsesion.html";
})
/* modo oscuro  */
const modoOscuro = document.querySelector("#Oscuro")
    const modoClaro = document.querySelector("#Claro")
    const letras = document.querySelectorAll(".whiteiniciosesion")
    const fondoNegro = document.querySelectorAll(".fondoNegroiniciosesion")


    modoOscuro.onclick = () => {
        infoAlLs("modoOscuro" , "activo")
        if (obtenerDelLs("modoOscuro", "activo" )) {
           letras.forEach(elementos => {
            elementos.style.color ="white";
           })
           fondoNegro.forEach(elements => {
            elements.style.backgroundColor = "black";
           })
        }
    }

    modoClaro.onclick = () => {
        infoAlLs("modoOscuro" , "desactivado")
        if (obtenerDelLs("modoOscuro", "desactivado" )) {
            letras.forEach(elementos => {
                elementos.style.color ="black";
               })
               fondoNegro.forEach(elements => {
                elements.style.backgroundColor = "white";
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
    