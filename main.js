var palRut ={
    "pa1":"videos/GOHAN LE DICE PENDEJO A GOKU XD (1).mp4",
     "pa2":"videos/Goku dice mondongo.mp4"
}
function rep(){
    var reproductor = document.getElementById("reproductor")
    let txt = document.getElementById("txt").value
    let list = txt.split(" ")
    console.log(list)
    var urlList = []
    var con =0;
    list.forEach(element => {
        if (palRut[element]) {
            urlList.push(palRut[element])
        }else{
            alert("no hay una demostracion de "+element+ "en nuestra base de datos lo siento :(")
        }
       
    });
    if(urlList.length >0){
    reproductor.src = urlList[con]
    reproductor.play()
    }else{
        alert("lo sentimos pero no hay niguna palabra de la frase en nuestra base de datos")
    }
    reproductor.addEventListener("ended", function() {
        console.log("El video ha terminado de reproducirse.");
        con++
        if(con > urlList.length){
            con =0
            urlList = []
    
        }else{
            reproductor.src = urlList[con]
            reproductor.play()
        }
    }); 
}
