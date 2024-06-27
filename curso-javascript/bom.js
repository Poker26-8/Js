'use strict'


//Browser Object Model

function getBom(){
    //console.log(window.innerWidth);//saber el ancho de la pantalla
    //console.log(window.innerHeight);//saber la altura de la pantalla
console.log(screen.width);
console.log(screen.height);
console.log(window.location);//para sacr la url de la pagina
}

function redirigir(url){
    window.location.href=url;
}

function abrirventana(url){
    window.open(url,"","width=400,height=300");
}

getBom();
