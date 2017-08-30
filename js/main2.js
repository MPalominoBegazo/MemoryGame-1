var tablero = document.getElementById("table-game");
var table = document.createElement("table");
var cont = 0;
var isClicked = 0;
var equalImage = [];
var IMGselected = [];
var images = ["assets/img/1.png", "assets/img/2.png",
    "assets/img/3.png", "assets/img/4.jpg", "assets/img/5.png",
    "assets/img/6.png"];

table.border = "1";

//seleccionamos las imagenes con random
for (var i = 0; i < 6; i++) {
    var randomImg = Math.floor(Math.random(images.length));
    var image = images[randomImg];
    IMGselected.push(image);
    IMGselected.push(image);
    images.splice(randomImg, 1); //se elimina de array original
}
IMGselected = IMGselected.sort(function () {
    return 0.5 - Math.random()
});

var delayStartFC = null;
var source1 = "";
var source2 = "";
var firstEvent ;
memory();
function memory() {
    for (var i = 0; i < 3; i++) {
        var filas = document.createElement("tr");

        for (var j = 0; j < 4; j++) {
            var celda = document.createElement("td");
            var img = document.createElement("img");
            var imgContent = document.createElement("img");

            img.setAttribute("class", "background");

            celda.addEventListener("click", (event) => {
                    event.target.style.visibility = "hidden";
                    
                    isClicked++;
                    if (isClicked == 1) {
                        source1 = event.target.nextSibling.src;
                        firstClick = event.target.nextSibling;
                        firstEvent =  event.target;
                        console.log("SOURCE ->" + source1);
                    }
                    else {
                        source2 = event.target.nextSibling.src;
                        console.log("SOURCE2 ->" + source2);
                        if (source1 === source2) {
                            event.target.nextSibling.visibility = "visible";
                            console.log(source1);
                            source1 = "";
                            isClicked =0;
                        }
                        else if (source1 !== source2) {
                            setTimeout(function () {
                                firstEvent.style.visibility = "visible";
                                event.target.style.visibility = "visible";
                            }, 1000);
                            source1 = "";
                            isClicked =0;
                        }
                    }
            });

            imgContent.setAttribute("class", "image");
            imgContent.src = IMGselected[cont];

            celda.appendChild(img);
            celda.appendChild(imgContent);
            cont++;
            console.log(imgContent.src);

            filas.appendChild(celda);
        }
        table.appendChild(filas);
    }
    tablero.appendChild(table);

}
