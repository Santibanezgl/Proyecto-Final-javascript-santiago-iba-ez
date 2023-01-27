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


const cards = (array) => {
    const nodosDom = array.reduce ((acc, element) => {
return acc + `
<div class="card text-center">
<div class="container-img">
<img id="corazon" src=${element.image} alt=${element.name} 
</div>   
<h2>
Nombre: ${element.name}
</h2>
<h3> 
Status: ${element.status}
</h3>
<h3>Fecha de creacion: ${element.created}</h3>
<h3> ¿Guardar este personaje en favoritos?</h3> 
<h3 class="corazones">♡</h3>
</div>
`
    },"")
    document.querySelector(".containerr").innerHTML = nodosDom
}

const personajes = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const data = await response.json()
    cards(data.results)
}

personajes ()





























/*window.addEventListener('load', obtenerDatos);

function obtenerDatos () {
    const Nasa_api = 'nmE4rvQ8YLQXirf6MJiRmExSe9QfQInO06yiOho0';
    const ruta = `https://api.nasa.gov/planetary/apod?api_key=${Nasa_api}`;

    fetch(ruta)
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarDatos(resultado))
}
function mostrarDatos ({date, explanation, media_type, title, url}){
    const titulo = document.querySelector("#titulo")
    titulo.innerHTML = title;
    const fecha = document.querySelector("#fecha")
    fecha.innerHTML = date
    const descripcion = document.querySelector("#descripcion")
    descripcion.innerHTML = explanation;
    const multimedia = document.querySelector("#c_multimedia")
    if (media_type == 'video'){
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}"></iframe>`
    } else {
        multimedia.innerHTML = `<img src="${url}" class="img-fluid" alt="${url}"></img>`
    }
} */
 




/*function datosAsteroides () {
    const Nasa_apii = 'nmE4rvQ8YLQXirf6MJiRmExSe9QfQInO06yiOho0';
    const ruta2 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${Nasa_apii}`;
    fetch(ruta2)
    .then (respuesta => respuesta.json())
    .then (resultado => mostrarDatoss(resultado))
}

function mostrarDatoss ({name, img_src, landing_date, status, earth_date}){
    const titulo2 = document.querySelector("titulo2")
    titulo2.innerHTML = name;
    const imagen = document.querySelector("imagen")
    imagen.innerHTML = img_src
    const landingDate = document.querySelector("landing_date")
    landingDate.innerHTML = landing_date
    const comoes = document.querySelector("comoes")
    comoes.innerHTML = status
    const earthDate = document.querySelector("earth_date")
    earthDate.innerHTML = earth_date
}

console.log (mostrarDatoss) */