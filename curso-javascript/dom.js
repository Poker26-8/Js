'use strict'

//DOM -Document Object Model

function cambiarcolor(color){
    caja.style.background=color;
}

//conseguir elementos con id concreto
//var caja = document.getElementById("micaja");// para traer el id de un contenedor de la pagina html
var caja= document.querySelector("#micaja"); //#seleccionar un id de un elemento, .si es una clase
caja.innerHTML="SE CAMBIO DESDE JS";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color="white"
caja.className="hola";

//conseguir elementos por su etiqueta

var todosdiv =document.getElementsByTagName('div');
var seccion=document.querySelector("#miseccion");
var hr=document.createElement("hr");
seccion.append(hr);
/*
var contenidoentexto=todosdiv[2];
contenidoentexto.innerHTML="tercero";
contenidoentexto.style.background="blue";*/
var valor;

for (valor in todosdiv){
    if( typeof todosdiv[valor].textContent== "string"){
        var parrafo = document.createElement("p");
        var texto= document.createTextNode(todosdiv[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
  
}
seccion.append(hr);

// conseguir elementos por su clase

var divRojos=document.getElementsByClassName("rojo");
var divamarillos= document.getElementsByClassName("amarillo");
divamarillos[0].style.background="yellow";
var div;
for(div in divRojos){
    if(divRojos[div].className=="rojo"){
        divRojos[div].style.background="blue";
        divRojos[div].style.color="white";
    } 
}

//query selector

var encabezado=document.querySelector("#encabezado");
console.log(encabezado);

var claserojo=document.querySelector(".rojo");
console.log(claserojo);

var etiqueta=document.querySelector("div");
console.log(etiqueta);


