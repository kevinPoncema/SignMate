const constraints = {
  audio: false,
  video: {
  width: 540,
  height: 540,
  },
  };
  
  const cam = navigator.mediaDevices.getUserMedia(constraints);
  
  const canvas = document.getElementById("camCanvas");
  
  cam.then((stream) => {
  canvas.srcObject = stream;
  canvas.play();
  
  // Create a new Kintras object
  const kintras = new Kintras();
  
  // Set the language of the input stream
  kintras.setLanguage("ASL");
  
  // Start the detection
  kintras.startDetection(stream, (result) => {
  // Get the translated text
  const translatedText = result.text;
  
  // Display the translated text
  document.getElementById("output").textContent = translatedText;
  });
  });
  
  cam.catch((error) => {
  if (error instanceof DOMException && error.message === "Permission denied" ||
  error.message === "Permission dismissed") {
  alert("Se requiere el acceso a la cámara para la detección del ASL. Conceda el permiso.");
  location.reload();
  } else if (error.message === "Permission denied by system") {
  alert("El permiso fue negado por el sistema. Cambie las configuraciones de acceso a la cámara.");
  } else {
  alert("Su equipo no cuenta con una cámara web, así que no puedo usar esa función del sistema.");
  alert("Ocurrió un error inesperado: " + error);
  }
  });
  