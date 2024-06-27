'use strict'

var categorias=['Accion','Amor','Ficcion','Comedia'];
var peliculas=["Marvel","3MC","LUNNY TONS",'MASTER CHEFT'];

console.log(peliculas);
var cine =[categorias,peliculas];
//console.log(cine[0][2]);
//console.log(cine[1][3]);

/*
var elemento = "";

do{
    elemento=prompt("Introduce una pelicula:");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

//peliculas.pop();
peliculas[0]=undefined;
*/

//eliminar un array concretamente

var indice=peliculas.indexOf('3MC');
if(indice>-1){
    peliculas.splice(indice,1);
}

var pel_strings=peliculas.join();

var cadena="texto1, texto2, exto3";
var candena_array=cadena.split(", ");

console.log(candena_array)
console.log(pel_strings);

