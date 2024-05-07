const bola=document.getElementById("superior__img")
const favoritos=document.getElementById("favorites");
const imgfavoritos=document.getElementsByClassName("favorites__img")

function clickar(){
    favoritos.classList.toggle("mostrar");
    imgfavoritos.classList.toggle("mostrar")
    
}

bola.addEventListener("click",clickar)