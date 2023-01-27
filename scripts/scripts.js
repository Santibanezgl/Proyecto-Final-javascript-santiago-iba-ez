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




