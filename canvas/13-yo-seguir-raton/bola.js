class Bola {
    constructor() {
        this.radius = 15;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.velocity = {
            x: 0,
            y: 0
        };
        // this.atraccionUsual = 0.5;
        this.atraccion = 0.4;
        this.maxvelocidad = 10;
    }


    update() {

        if(this.x > mouse.x)
            this.velocity.x -= this.atraccion;
        else if(this.x < mouse.x)
            this.velocity.x += this.atraccion;
        
        if(this.y > mouse.y)
            this.velocity.y -= this.atraccion;
        else if(this.y < mouse.y)
            this.velocity.y += this.atraccion;


        //si la velocidad supera el limite se le resta la fuerza de atraccion que se le suma anteriormentes
        if(this.velocity.x < -this.maxvelocidad)
            this.velocity.x += this.atraccion;
        if(this.velocity.x > this.maxvelocidad)
            this.velocity.x -= this.atraccion;

        if(this.velocity.y < -this.maxvelocidad)
            this.velocity.y += this.atraccion;
        if(this.velocity.y > this.maxvelocidad)
            this.velocity.y -= this.atraccion;


        this.x += this.velocity.x;
        this.y += this.velocity.y;

        console.log(this.x, this.y)

        this.draw();
    }






    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = 'white';
        c.fill();
        c.closePath();
    }
}