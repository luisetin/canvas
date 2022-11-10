class Ball{

    constructor(x,y,dx,dy,radius,color)
    {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;  
        this.color = color;
        
    }

    update() {
        
        if(this.y+this.radius+this.dy > canvas.height)
            this.dy = -this.dy * friction;
        else
            this.dy += gravity;
        
        if(this.x+this.radius > canvas.width 
            || this.x-this.radius < 0)
            this.dx = -this.dx;
        
            

        this.x += this.dx;
        this.y += this.dy;

        
        this.draw();

    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.stroke();
        c.closePath();   
    }


}