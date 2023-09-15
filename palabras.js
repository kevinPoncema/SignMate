// Esta función se ejecuta cuando se carga el documento
document.addEventListener("DOMContentLoaded", function() {

    // Crea un mapa con las palabras como clave y las rutas de las animaciones como valor
    const palabras = new Map([
      ["hola", "videos/Hola.mp4"],
      ["bienvenido", "videos/Bienvenido.mkv"],
      ["para", "videos/Parar.mkv"],
      ["papa", "videos/papa.mp4"],
      ["bien", "videos/bien.mp4"],
      ["no", "videos/no.mp4"],
      ["si", "videos/si.mp4"],
      ["perdon", "videos/perdon.mp4"],
      ["vender", "videos/pal.mp4"]
    ]);
  
    // Crea un arreglo con todas las claves del mapa
    const claves = Array.from(palabras.keys());
  
    // Obtiene el elemento de la selección
    const select = document.getElementById("palabras");
  
    // Agrega las opciones al elemento de la selección
    claves.forEach(clave => {
      const option = document.createElement("option");
      option.value = clave;
      option.text = clave;
      select.appendChild(option);
    });
  
    // Obtiene el elemento del reproductor
    const reproductor = document.getElementById("reproductor");
  
    // Agrega un evento de cambio al elemento de la selección
    select.addEventListener("change", function() {
  
      // Obtiene el valor seleccionado
      const seleccion = select.value;
  
      // Establece la fuente del reproductor
      reproductor.src = palabras.get(seleccion);
  
      // Muestra un mensaje de alerta con el valor seleccionado
      alert(`Has seleccionado: ${seleccion}`);
    });
  });
  
  


