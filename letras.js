//se crea u evento que se ejecuta cuando se carga el documento
document.addEventListener("DOMContentLoaded", function() {
    const letr = new Map([
        ["A", "videos/GOHAN LE DICE PENDEJO A GOKU XD (1).mp4"],
        ["B", "videos/Goku dice mondongo.mp4"],
        ["C", "videos/Goku dice mondongo.mp4"]
    ]);
    var rep = document.getElementById("reproductor")
    function pal(let){
        rep.src = letr.get(seleccion);
        
    }
 });