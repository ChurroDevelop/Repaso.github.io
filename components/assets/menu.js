const cabeceraIcon = document.querySelector(".cabecera--icon");
const cabeceraLista = document.querySelector(".cabecera--lista");



const cabeceraInicio = document.querySelector(".siu")
const cabeceraComunidad = document.querySelector(".nou");
const cabeceraPlanes = document.querySelector(".que");
const cabeceraApp = document.querySelector(".so");



const bars = document.querySelector("#bars");
// const cabeceraList = document.querySelector("#cabecera--list");

cabeceraIcon.addEventListener("click", ()=>{
    cabeceraLista.classList.toggle("aparecer");
});

cabeceraInicio.addEventListener("click", ()=>{
    cabeceraLista.classList.remove("aparecer");
});

cabeceraComunidad.addEventListener("click", ()=>{
    cabeceraLista.classList.remove("aparecer");
})

cabeceraPlanes.addEventListener("click", ()=>{
    cabeceraLista.classList.remove("aparecer");
})

cabeceraApp.addEventListener("click", ()=>{
    cabeceraLista.classList.remove("aparecer");
});