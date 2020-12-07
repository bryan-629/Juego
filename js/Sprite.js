function Sprite(ruta,idSobreCero,posicionEnHoja){
    var elementosRuta = ruta.split("/");
    this.rutaHojaOrigen ="img/" + elementosRuta[elementosRuta.length] - 1;
    this.idSobreCero=idSobreCero;
    this.idSobreUno= idSobreCero + 1;
    this.posicionEnHoja = posicionEnHoja;
}