var mando= {
   objeto: null,
   eventosDisponibles:'ongamepadconnected' in window,
   conectado :false,

   iniciar: function(){
      if(mando.eventosDisponibles){
         window.addEventListener("gamepadconnected", mando.conectar);
         window.addEventListener("gamepaddisconnected", mando.desconectar)
      }else{
         mando.actualizar();
      }
   },
   conectar: function(e){
      mando.objeto=e.gamepad;
      mando.indentificar();
   },
   desconectar: function(e){
      console.log("Mando desconectado del indice %d: %s.", e.gamepad.index, e.gamepad.id)
   },
   actualizar: function(){
      if(!mando.eventosDisponibles){
         mandos=null;
         try{
            mandos= navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
            mando.objeto = mandos[0];
            if(!mando.conectado){
               mando.conectado=true;
               mando.identificar();
            }
         }catch(error){
            console.log(error.message);
         }
      }
      if(!mando.objeto){
         return;
      }
      if(mando.botonPulsado(mando.objeto.buttons[0])){
         console.log("Mando X")
      }
      
   },

   botonPulsado: function(boton){
      if(typeof(boton)== "object"){
         return boton.pressed;
      }
      return boton == 1.0;
   },
   identificar: function(){
      console.log("Mando conectado en el indice %d %s. %d botones %d ejes", mando.objeto.index, mando.objeto.id, mando.objeto.buttons.length, mando.objeto.axes.length);
   }


}