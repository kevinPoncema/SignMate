//se crea un objecto con las configuraciones de la cmara
const constraints = {
    audio: false,
    video: {
      width: 540,
      height: 540,
    },
  };
  //se le solicita adceso a su camara al usuario pasando el objecto de antes como parametro
  const cam = navigator.mediaDevices.getUserMedia(constraints);
  //se crea una constante para almacenar una etiqueta de video para mostrar la camara 
  const canvas = document.getElementById("camCanvas");
  //se hace un then para manejar extensiones 
  cam.then((stream) => {
    //se iguala el parametro src object al objecto que se devulve si el usario consede el permiso
    canvas.srcObject = stream;
    canvas.play();//se reproduce el video 
    console.log(stream);//see imprimen los datos del objecto
  });
  
  cam.catch((error) => {//si hay un eror se imprimen 
    if (error instanceof DOMException && error.message==="Permission denied" ||
    error.message==="Permission dismissed") {
        alert("se requiere el aceso a camra para la detecion del ls conseda el permiso")
        //se reincia el sitio web para que vuelva a salir lo del permiso 
        location.reload();
    }else if (error.message==="Permission denied by system") {
       alert("el permiso fue negado por el sitema cambie las cofiguraciones de aceso a camara")
    }else{
        alert("suequipo no cuenta con una webcam asi que no pude usar esa funcion del sitema")
        alert("ocurio un eror inesperado "+error)
        
    }
  });