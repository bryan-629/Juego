//aps= actualizaciones por segundo


var buclePrincipal = {
    idEjecucion: null,
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal){
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar); //Este metodo necesita un callback para realizar animaciones
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar(registroTemporal);
        

        if(registroTemporal - buclePrincipal.ultimoRegistro >999){
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps +" | " + "FPS: " + buclePrincipal.fps);
            buclePrincipal.aps=0;
            buclePrincipal.fps=0;
        }
    },
    detener: function(){

    },
    actualizar: function(registroTemporal){
        buclePrincipal.aps++;
        teclado.reiniciar();
        mando.actualizar();
    },
    dibujar: function(registroTemporal){
        buclePrincipal.fps++;
    }
};