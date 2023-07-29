let app = document.getElementById ('typewriter');

let typewriter = new Typewriter(app,{
    loop: true,
    delay: 75,
});

typewriter
.pauseFor(1000)
.typeString('Minerva Hernández')
.pauseFor(1500)
.deleteChars(10)
.start();
/*
let miImage = document.getElementById("fotoexperiencia");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "tecnologías.png") {
    miImage.setAttribute("src", "logoomm.png");
  } else {
    miImage.setAttribute("src", "tecnologías.png");
  }
}; */