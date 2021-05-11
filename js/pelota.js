class Pelota {
  constructor(x,y,diametro) {
    this.x = x
    this.y = y
    this.diametro = diametro
    this.color = "#ffffff";
    this.stepX = 2;
    this.stepY = 2;
  }

  display() {
    fill(this.color);
    circle(this.x,this.y,this.diametro);
    this.hasCollition();
    this.golpe();
    this.movimiento();
  }

  hasCollition() {
    //Choque arriba
    if(this.y - this.diametro/2 <= 0) {
      this.stepY = 2;
    //Choque abajo
    } else if (this.y + this.diametro/2 >= windowHeight) {
      this.stepY = -2;
    //Choque izquierda
    } else if (this.x + this.diametro/2 <= 0 ) {
      puntosJ2++;
      this.stepX = 2;
    //Choque derecha
    } else if (this.x + this.diametro/2 >= windowWidth) {
      puntosJ1++;
      this.stepX = -2;
    }
  }

  golpe() {
    if (j1.contacto(this.x,this.y,1)) {
      this.stepX = 2
    } else if (j2.contacto(this.x,this.y,2)) {
      this.stepX = -2;
    }
  }

  movimiento() {
    this.x += this.stepX;
    this.y += this.stepY;
  }

}
