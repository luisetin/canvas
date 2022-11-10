class Bola{
    constructor(x,y,radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = "red"
        this.gravity = 1;
        this.friction = 0.9;
        this.velocity = {
            x: 0,
            y: 5
        };
        this.mass = 1;
    }



    update(bolas) {

        for(let i = 0; i < bolas.length; i++) {
            if(this === bolas[i]) continue;

            if(getDistance(this.x,this.y,bolas[i].x,bolas[i].y) < 0 + this.radius*2) {

                resolveCollision(this, bolas[i]);
            }
        }




        if(this.y + this.radius + this.velocity.y >= canvas.height) {
            this.velocity.y = -this.velocity.y * this.friction;
        }
        else
            this.velocity.y += this.gravity;


        if(this.x + this.radius > canvas.width || this.x - this.radius < 0)
            this.velocity.x = -this.velocity.x;


        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.draw();
    }










    draw() {

        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = "black";
        c.stroke();

    }
}