function Tile(xEnTiles, yEnTiles, z, ancho, alto, sprite) {
    this.rectanculo= new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
    this.zIndex= z;
    this.sprite=sprite;
    this.idHTML= "x" + xEnTiles + "y" + yEnTiles + "z" + z;
    this.html= '<div id="'+this.idHTML+'"></div> ';
    
}
Tile.prototype.aplicarEstilos = function () {
    if(!document.getElementById("this.idHTML")){
        throw("El ID " + this.idHTML + " No existe en la hoja");
    }
    document.getElementById("this.idHTML").style.position= "absolute";
    document.getElementById("this.idHTML").style.left= (Rectangulo.x * Rectangulo.ancho) + "px";
    document.getElementById("this.idHTML").style.top= (Rectangulo.y * Rectangulo.alto) + "px";   
    document.getElementById("this.idHTML").style.width= Rectangulo.ancho + "px";
    document.getElementById("this.idHTML").style.height= Rectangulo.alto + "px";
    document.getElementById("this.idHTML").style.zIndex="" + this.zIndex; //LAS COMILLAS DOBLES COMBIERTEN TODA LA CADENA EN STRING
    document.getElementById("this.idHTML").style.background = "url('"+ this.sprite.rutaHojaOrigen+"')";
    var x= this.sprite.posicionEnHoja.x; 
    var y = this.sprite.posicionEnHoja.y;
    document.getElementById("this.idHTML").style.backgroundPosition = "-" + x + "px " + "-" + y + "px";
    document.getElementById("this.idHTML").style.backgroundClip = "border-box";
    document.getElementById("this.idHTML").style.outline = "1px solid transparent";
}