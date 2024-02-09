const cabeceraIcon = document.querySelector(".cabecera--icon");
const cabeceraLista = document.querySelector(".cabecera--lista");
cabeceraIcon.addEventListener("click", ()=>{
    cabeceraLista.classList.toggle("aparecer");
});