class Pelota {

    constructor() {
        this.radius = 10;
        this.dx = randInt(-5,5);
        this.dy = randInt(-5,5);
        this.x = randInt(500, 1000);
        this.y = randInt(this.radius, innerHeight - this.radius);
    }


    update() {




        //comprobacion bordes
        if(this.x - this.radius <= 0 || this.x + this.radius >= innerWidth)
            this.dx = -this.dx;

        if(this.y - this.radius <= 0 || this.y + this.radius >= innerHeight)
            this.dy = -this.dy;
        

        this.x += this.dx;
        this.y += this.dy;


        this.draw();
    }


    draw() {

        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false),
        c.fillStyle = "red"
        c.fill();
        c.closePath();



    }


}