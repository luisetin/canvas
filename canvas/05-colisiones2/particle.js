class Particle {
    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.mass = 1;
        this.color = randColor();
        this.opacity = 0;
        this.velocity = {
            x: randNum(-2.5,2.5),
            y: randNum(-2.5,2.5)
        };
    }

    update(particles) {
        this.draw();

        for(let i = 0; i < particles.length; i++) {
            if(this === particles[i]) continue;
            if(getDistance(this.x, this.y, particles[i].x, particles[i].y) < 0 + this.radius*2) {
                resolveCollision(this, particles[i]);
            }
        }

        if(this.x >= canvas.width - this.radius || this.x <= 0 + this.radius)
            this.velocity.x = -this.velocity.x;
        if(this.y >= canvas.height - this.radius || this.y <=    0 + this.radius)
            this.velocity.y = -this.velocity.y;


        //comprobar raton cerca
            if(getDistance(mouse.x, mouse.y, this.x, this.y) < 120 && this.opacity < 0.2)
                this.opacity += 0.02;
            else if(this.opacity > 0) {
                this.opacity -= 0.02;
                
                this.opacity = Math.max(0, this.opacity);
            }
                
                

        this.x += this.velocity.x;
        this.y += this.velocity.y;

    }





    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        c.save();
        c.globalAlpha = this.opacity;
        c.fillStyle = this.color;
        c.fill();
        c.restore();
        c.strokeStyle = this.color;
        c.stroke();
        c.closePath();
    }

}