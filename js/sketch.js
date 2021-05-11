let pelota = new Pelota(10, 10,10);
let j1 = new Jugador(10,10,15,60,"#ffffff");
let j2;
let puntosJ1 = 0;
let puntosJ2 = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  j2 = new Jugador(windowWidth-30,10,15,60,"#ffffff");
}

function draw() {
  background("#000");
  stroke("#fff");
  line(windowWidth/2,0,windowWidth/2,windowHeight);

  pelota.display();
  j1.display();
  j2.display();
  fill("#fff");
  textSize(90);
  text(puntosJ1,(windowWidth/2)-130,100);
  text(puntosJ2,(windowWidth/2)+30,100);
}


function keyPressed() {

  if (keyCode === 83) {
    j1.direccion("down");
  } else if (keyCode === 87) {
    j1.direccion("up")
  } else if (keyCode == 40) {
    j2.direccion("down");
  } else if (keyCode == 38) {
    j2.direccion("up");
  }

}
