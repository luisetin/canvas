class Fruta {
    
    constructor() {
        this.radius = 15;
        this.x = randInt(50, canvas.width - 50);
        this.y = 50;
        this.dy = 5;
    }




    update() {




        this.y += this.dy;

        this.draw();
    }



    draw() {
        c.beginPath();
        c.fillStyle = "red";
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.closePath();
    }


}
















function randInt(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }