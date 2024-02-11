let items = document.querySelectorAll('.container--planes .card--slider');
let siguiente = document.getElementById('#siguiente');
let anterior = document.getElementById('#anterior');

let active = 3;
function loadShow(){
    let stt = 0;
    for(var i = active + 1; i < items.length; i++){
        stt++;
        items[i].style.display = 'flex';
    }
}
loadShow();