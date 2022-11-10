const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");


    
class Circle{
    constructor(x,y,dx,dy,radius)
    {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
    }

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
        c.strokeStyle= "red";
        c.fill();
        c.stroke();
    }

    update() {
        

        if(this.x>innerWidth-this.radius || this.x<0+this.radius)
            this.dx = -this.dx;
        if(this.y>innerHeight-this.radius || this.y<0+this.radius)
            this.dy = -this.dy;               
        
        this.x += this.dx;
        this.y += this.dy;   

        this.draw();
    }
}

let circleArray = [];
let x, y, dx, dy;
let radius = 50;

for(let i = 0; i < 100; i++) {
    x = Math.random() * (innerWidth-radius * 2) + radius;                
    y = Math.random() * (innerHeight-radius * 2) + radius;                
    dx = (Math.random()-0.5) * 5;
    dy = (Math.random()-0.5) * 5;

    circleArray.push(new Circle(x,y,dx,dy,radius))
}



function animar()
{
    requestAnimationFrame(animar);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)

    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    
}

animar();