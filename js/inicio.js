
document.addEventListener('DOMContentLoaded', function(){
    inicio.iniciarJuego();
    
},false);//Este evento es que esta a la escucha de la carga, como JQuery

var inicio = {
    iniciarJuego: function(){
        console.log("Juego iniciado");
        teclado.iniciar();
        dimensiones.iniciar();
        mando.iniciar();
        inicio.recargarTiles();
        buclePrincipal.iterar();
        
        
    },
    recargarTiles: function () {
        document.getElementById("juego").innerHTML="";

        for(var y=0; y<dimensiones.obtenerTilesVerticales();y++){ //Tiles son los cuadrados
            for(var x = 0; x<dimensiones.obtenerTilesHorizontales();x++){
                var r= new Rectangulo(x*dimensiones.ladoTiles,y*dimensiones.ladoTiles,dimensiones.ladoTiles,dimensiones.ladoTiles);
            }
        }
    }
};

