'use strict'

//eventos del raton

window.addEventListener('load',()=>{

        function cambiarcolor(){

            var bg=boton.style.background;
        
            if(bg=="green"){
                boton.style.background="red";
        
            }else{
                boton.style.background="green";
            }
            boton.style.padding="10px";
                boton.style.border="1 px solid #ccc"
            return true;
        }
        
        var boton=document.querySelector("#boton");
        
        //evento click
        boton.addEventListener('click',function(){
            cambiarcolor();
            this.style.border="10px solid black";//this es para el elemento seleccionado envez de ocupar la variable
        });
        
        //evento mouse over
        boton.addEventListener('mouseover',function(){
            boton.style.background="yellow";
        });
        
        //evento mouseout
        boton.addEventListener('mouseout',function(){
        boton.style.background="#ccc";
        });
        
        //focus en cajas de texto
        var input=document.querySelector("#camponombre");
        
        input.addEventListener('focus',function(){
            console.log("[focus] estas dentro del input");
        });
        //blur
        input.addEventListener('blur',function(){
            console.log("[Blur] Salimos del input");
        });
        //keydown
        input.addEventListener('keydown', function(event){
            console.log("[key down] pulsamos una tecla", event.key);
        
        });
        //keypress
        input.addEventListener('keypress', function(event){
            console.log("[key press] tecla presionada", event.key);
        
        });
        //keyup
        
        input.addEventListener('keyup',function(event){
        console.log("[key up] levantamos el dedo de la tecla",event.key);
        });

});//final del load

