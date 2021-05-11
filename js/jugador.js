class Jugador {
  constructor(x,y,ancho,alto,color) {
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.color = color;
    this.stepY = 2;
  }

  display() {
    fill(this.color);
    rect(this.x,this.y,this.ancho,this.alto);
    this.hasCollition();
    this.movimiento();
  }

  direccion (dir) {
    if (dir == "down") this.stepY = 2;
    else if(dir == "up") this.stepY = -2;
    this.movimiento();
  }

  hasCollition() {
    if(this.y <= 0) {
      this.stepY = 2;
    } else if (this.y + this.alto >= windowHeight) {
      this.stepY = -2;
    }
  }

  movimiento() {
    this.y += this.stepY;
  }

  contacto(px,py,j) {
    if (j == 1) {
      if(px <= this.x + this.ancho) {
        if (py <= this.y + this.alto && py >= this.y) {
          return true;
        }
      }
    } else if (j == 2) {
      if(px >= this.x) {
        if (py <= this.y + this.alto && py >= this.y) {
          return true;
        }
      }
    }
    return false;
  }

}
