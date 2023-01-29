 /* ARCHIVO JS QUE CORRESPONDE A INDEX.HTML  */

 const InicioIndex = document.querySelector ("#inicioindex")

 const cerrarSesion3 = document.querySelector("#logoutindex")
 /* local storage */
 const infoAlLs = (key, value) => {
     localStorage.setItem(key, JSON.stringify(value))
 }
 
 const obtenerDelLs = (key) => {
     return JSON.parse(localStorage.getItem(key))
 }

  
 /* desaparecer boton de login pagina favoritos */
 const validarLoginJs3 = (valor) =>{
    if (valor === true){
InicioIndex.style.display = "none"
cerrarSesion3.style.display = "block"
    }
}
validarLoginJs3 (obtenerDelLs("login"))


 /* cerrar sesion con click */
 cerrarSesion3.addEventListener("click", () => {
    localStorage.removeItem("login")
    window.location.href = "index.html";
})


/* cards rick y morty */
const cards = (array) => {
    const nodosDom = array.reduce ((acc, element) => {
return acc + `
<div class="card text-center fondoNegro" id="personaje-${element.id}">
<div class="container-img fondoNegro">
<img id="corazon" src=${element.image} alt=${element.name} 
</div>   
<h2 class="white">
Nombre: ${element.name}
</h2>
<h3 class="white"> 
Status: ${element.status}
</h3>
<h3 class="white">Fecha de creacion: ${element.created}</h3>
<h3 class="white"> ¿Guardar este personaje en favoritos?</h3> 
<button id="boton"> ♡ </button>
</div>
`
    },"")
   document.querySelector(".containerr").innerHTML = nodosDom

}

/* fetch + swal + like */
const personajes = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    cards(data.results)
    const Like = document.querySelectorAll("#boton")
    Like.forEach(elemento=> {
        elemento.onclick = () => {
            elemento.style.color ="red";
            swal("¡Felicitaciones likeaste un personaje!","Podes visualizarlo desde el apartado favoritos")
        }
    })

    const modoOscuro = document.querySelector("#Oscuro")
    const modoClaro = document.querySelector("#Claro")
    const letras = document.querySelectorAll(".white")
    const fondoNegro = document.querySelectorAll(".fondoNegro")


    modoOscuro.onclick = () => {
        infoAlLs("modoOscuro" , "activo")
        if (obtenerDelLs("modoOscuro", "activo" )) {
            letras.forEach(elementos => {
                elementos.style.color ="white";
            })
            fondoNegro.forEach(elementos => {
                elementos.style.backgroundColor = "black";
            })
        }
    }

 
modoClaro.onclick = () => {
    infoAlLs("modoOscuro" , "desactivado") 
    if (obtenerDelLs("modoOscuro", "desactivado")) {
        letras.forEach(elementos => {
            elementos.style.color ="black";
        })
        fondoNegro.forEach(elementos => {
            elementos.style.backgroundColor = "white";
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
}

personajes ()

