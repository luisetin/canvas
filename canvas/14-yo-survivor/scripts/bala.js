class Bala {

    constructor(velx, vely) {

        this.color = "red";
        this.radius = 20;
        this.position = {
            x: player.position.x + player.width / 2,
            y: player.position.y + player.height / 2,
        };
        this.velocity = {
            x: 0,
            y: 0,
            speed: 15,
        };

        this.mousepos = {
            x: mouse.x,
            y: mouse.y,
        }

        this.retrocesoy = 0;
    }

    update() {



        this.move();
        this.draw();
    }

    move() {


        let dx = this.position.x - this.mousepos.x;
        let dy = this.position.y - this.mousepos.y + this.retrocesoy;

        if(mouse.x != this.position.x)
            this.position.x -= dx/15;
        
        if(mouse.y != this.position.y)
            this.position.y -= dy/15;


        // this.position.x += this.velocity.x * this.velocity.speed;
        // this.position.y += this.velocity.y * this.velocity.speed;

    }


    draw(){
        c.beginPath();
        c.fillStyle = this.color;
        c.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2 ,false);
        c.fill();
        c.closePath();
    }


}