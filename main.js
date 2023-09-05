var palRut = {
    "hola": "videos/Hola_2.mp4",
    "papa": "videos/papa.mp4",
    "bienvenido": "videos/Bienvenido.mkv",
    "para": "videos/Parar.mkv"
    // Agrega más entradas para otras palabras aquí
};

function rep() {
    var reproductor = document.getElementById("reproductor");
    let txt = document.getElementById("txt").value;
    let list = txt.split(" ");
    console.log(list);
    var urlList = [];
    var con = 0;

    list.forEach(element => {
        if (palRut[element]) {
            urlList.push(palRut[element]);
        } else {
            alert("No hay una demostración de " + element + " en nuestra base de datos. Lo siento :(");
        }
    });

    if (urlList.length > 0) {
        reproductor.src = urlList[con];
        reproductor.play();
    } else {
        alert("Lo sentimos, pero no hay ninguna palabra de la frase en nuestra base de datos.");
    }

    reproductor.addEventListener("ended", function() {
        console.log("El video ha terminado de reproducirse.");
        con++;
        if (con < urlList.length) {
            reproductor.src = urlList[con];
            reproductor.play();
        } else {
            con = 0;
            urlList = [];
        }
    });
}


