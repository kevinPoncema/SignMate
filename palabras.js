//se crea u evento que se ejecuta cuando se carga el documento
document.addEventListener("DOMContentLoaded", function() {
   //se crea un mapa con las palabras como clave y las rutas de las animaciones como  valor
    const palabras = new Map([
        ["hola", "videos/Hola_2.mp4"],
        ["bienvenido", "videos/Bienvenido.mkv"],
        ["para", "videos/Parar.mkv"],
        ["papa", "videos/papa.mp4"],
        ["bien", "videos/bien.mp4"],
        ["no", "videos/no.mp4"]
    ]);
    //se coloclocan todas las claves  en un arreglo
    let claves = Array.from(palabras.keys());
    let select = document.getElementById("palabras"); // se llama al secet
    //se usa un foreach para recorer cada elemento del arreglo
    claves.forEach(clave => {//se agregan las opciones modiiifcando el domm
        let option = document.createElement("option");
        option.value = clave;
        option.text = clave;
        select.appendChild(option);
    });
    var rep = document.getElementById("reproductor")
    // Agrega un evento que se llama al selecionar una opcion
select.addEventListener("change", function() {
    // Obtiene el valor seleccionado
    const seleccion = select.value;
    
    // Realiza la acción deseada
    rep.src = palabras.get(seleccion);
    alert(`Has seleccionado: ${seleccion}`);
});
});


