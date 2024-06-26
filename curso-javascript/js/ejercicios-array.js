'use strict'

/*
1.- realizar un programa que pida 6 números por pantalla y los meta en un array
2.- Mostrar el array entero (todos sus elementos) en el cuepro de la pagina y consola
3.- Ordenar y mostralo
4.- Invertir su orden y mostrarlo
5.- mostrar cuantos elementos tiene el array
6.- realizar una busqueda de un valor introducido por el usuario y que nos diga si esta en el array y su indicie
*/

//2
function mostrarArray(elementos,textocustom=""){
    document.write("<h1>CONTENIDO DEL ARRAY "+ textocustom +"</h1>");

    document.write("<ul>");
    
    numero_array.forEach ((elemento, index)=> {//el primero son todos los elementos, el segundo es para saber que indice estoy seleccionando
        document.write("<li>" +index +" - "+ elemento + "</li>");
    });
    document.write("</ul>");
}
//1
//var numero_array =new Array(76);
var numero_array=[];

for(var i = 0; i <= 5; i++){
   // numero_array[i]=parseInt(prompt("INGRESA UN NÚMERO",0));
    numero_array.push(parseInt(prompt("INGRESA UN NÚMERO",0)));
 }
 console.log(numero_array);

mostrarArray(numero_array);
//3
numero_array.sort(function(a,b){return a-b});
mostrarArray(numero_array,'ORDENAR');

//4
numero_array.reverse(function(b,a){return b-a});
mostrarArray(numero_array,"DESORDENAR");

//5
document.write("EL ARRAY TIENE UUNA CANTIDAD DE: "+numero_array.length+" ELEMENTOS");

//6 BUSQUEDA
var busqueda=parseInt(prompt("BUSCA UN NÚMERO",0));

var posicion =numero_array.findIndex(numero_array=>numero_array==busqueda);

if(posicion && posicion != -1){
    document.write("<hr/><h1>ENCONTRADO</h1>"); 
    document.write("<h1>Posiciion de la busqueda: "+posicion+"</h1><hr/>"); 
}else{
    document.write("<hr/><h1>NO ENCONTRADO</h1><hr/>"); 
}




