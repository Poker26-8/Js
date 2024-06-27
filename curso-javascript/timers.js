'use strict'

window.addEventListener('load',()=>{

    //timer
    function intervalo(){
        var tiempo= setInterval(() => {
    
    
            console.log("set interval ejecutado");
            var encabezado=document.querySelector("h1");
    
            if(encabezado.style.fontSize=="50px"){
                        encabezado.style.fontSize="30px";
            }else{
                    encabezado.style.fontSize="50px";
            }
    
        }, 1000);

        return tiempo;
    }
var tiempo=intervalo();
    

    var iniciar=document.querySelector("#iniciar");
    iniciar.addEventListener('click',function(){
            alert("Has iniciado el timer");
           intervalo();
    });

    var stop=document.querySelector("#parar");

    stop.addEventListener('click',function(){
        alert("Has parado el timer");
    clearInterval(tiempo);
    });

});