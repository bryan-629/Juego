var dimensiones= {
    ancho: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    alto: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
    ladoTiles: 100,
    escala:1,
    iniciar: function(){
        window.addEventListener("resize", function(){
            dimensiones.ancho= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            dimensiones.alto= window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            inicio.recargarTiles();
            console.log("Ancho: "+dimensiones.ancho+ " | "+ "Alto: "+ dimensiones.alto);
        });
    },

    obtenerTilesHorizontales: function(){
        var ladoFinal=dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.ancho - ladoFinal) / ladoFinal); //ceil se encarga de redondear el numero hacia arriba 10.1 = 11
    },

    obtenerTilesVerticales: function(){
        var ladoFinal=dimensiones.ladoTiles * dimensiones.escala;
        return Math.ceil((dimensiones.alto - ladoFinal) / ladoFinal); //ceil se encarga de redondear el numero hacia arriba 10.1 = 11
    },
    obtenerTotalTiles: function(){
        return dimensiones.obtenerTilesHorizontales * dimensiones.obtenerTilesVerticales;
    }
};