class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.radius = 10;
        this.vx = (Math.random() - 0.5) * 3; 
        this.vy = (Math.random() - 0.5) * 3;
        this.color = `hsl(${hue}, 100%, 50%)`;
    }


    update() {


        this.x += this.vx;
        this.y += this.vy;

        if(this.radius > 0.2)
            this.radius -= 0.1;

        this.draw();
    }



    draw() {

        c.beginPath();
        c.fillStyle = this.color;
        if(blanco)
            c.fillStyle = "white";
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.closePath();



    }

}