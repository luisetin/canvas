class Bola {

    constructor() {
        this.radius = 1;
        this.x = mouse.x;
        this.y = mouse.y;
        this.startPosX = mouse.x;
        this.startPosY = mouse.y;

        this.velocity = {
            x: 0,
            y: 0,
        }
        this.gravity = 1;
        this.friction = this.radius * 0.005;
        this.gravityAct = false;
        // this.mass = 1;
    }



    update() {

        // for(let i = 0; i < bolas.length; i++) {
        //     if (bolas[i] === this) continue; 

        //     let disx = this.x - bolas[i].x;
        //     let disy = this.y - bolas[i].y;
        //     let distancia = Math.sqrt(disx * disx + disy * disy);

        //     if(distancia < this.radius + bolas[i].radius)
        //         resolveCollision(this, bolas[i]);
        // }


        if(mouse.clicando && this.x == this.startPosX && this.y == this.startPosY) {
            this.radius++;
        }
        else {
            this.y += this.velocity.y;
            this.gravityAct = true;
        }


        if(this.y + this.radius + this.velocity.y > canvas.height) {

            this.velocity.y = -this.velocity.y * (1 - (this.radius * 0.005));

        }
        else {
            if(this.gravityAct)
                this.velocity.y += this.gravity;
        }



        this.x += this.velocity.x;
        


        this.draw();
    }




    draw() {

        c.beginPath();
        c.fillStyle ="black";
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        c.fill();
        c.closePath();

    }



}