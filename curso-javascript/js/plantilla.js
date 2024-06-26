'use strict'

//Plantillas de texto

var nom=prompt("INGRESA TU NOMBRE");
var apellidos= prompt("INGRESA TUS APELLIDOS");

//var texto = "mi nombnre es: "+nom+" </br> mis apellidos son: "+apellidos;

var texto=`
<h1>Hola Jovenes</h1>
<h2>Mi nombre es: ${nom}</h2>
<h2>Mis apellidos son: ${apellidos}</h2>
`;
document.write(texto);