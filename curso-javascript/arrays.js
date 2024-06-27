'use strict'
// arrays,arreglos,matrices

var nombre  = "Carlos";
var nombres = ["Carlos Aguirre","Alexander Garcia","Jasiel Nuñes","Toño Benitez",27,true];

var lenguajes = new Array("PHP","JS","NET","JAVA","C++","C","c#");

/*
//console.log(nombres.length); saber la longitud del doto array.
var elemento =parseInt( prompt("QUE ELEMENTO DEL ARRAY QUIERES",0));
if(elemento >= nombres.length){
    alert("INTRODUCE EL NÚMERO CORRECTO MENOR QUE "+ nombres.length);
}else{
    alert("El usuario seleccionado es: "+nombres[elemento]);
}
//alert(nombres[elemento]);// para traer el valor del array ingresado.
*/

document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<ul>");

/*
for(var i = 0; i < lenjuages.length; i++){
    document.write("<li>" + lenjuages[i] +"</li>");
}
*/

/*
lenjuages.forEach ((elemento, indice,arr)=> {//el primero son todos los elementos, el segundo es para saber que indice estoy seleccionando
    document.write("<li>" +indice +" - "+ elemento + "</li>");
});
*/

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguajes[lenguaje] + "</li>");
}

//buscar arrays
var precios=[10,20,55,69,78,29,54];
//var busqueda=lenguajes.find(lenguaje=>lenguaje=="PHP");
//var busqueda=lenguajes.findIndex(lenguaje=>lenguaje=="PHP");//traer el index del objeto que estoy bsucando.

 var busqueda=precios.some(precio=> precio>=80);//el metodo some es para buscar si existe una validacion en concreta

console.log(busqueda);

document.write("</ul>");
