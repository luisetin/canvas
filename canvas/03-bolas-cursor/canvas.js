const canvas = document.querySelector("canvas");

canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");


let mouse = {
    x: undefined,
    y:  undefined
};

window.addEventListener("resize", function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

window.addEventListener("mousemove", function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    console.log(mouse);
})
    
class Circle{
    constructor(x,y,dx,dy,radius)
    {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colores[Math.floor(Math.random()*colores.length)];     
    }   

    draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0 , Math.PI * 2, false);
        c.fillStyle = this.color;   
        c.fill();
    }

    update() {
        

        if(this.x>innerWidth-this.radius || this.x<0+this.radius)
            this.dx = -this.dx;
        if(this.y>innerHeight-this.radius || this.y<0+this.radius)
            this.dy = -this.dy;               
        
        this.x += this.dx;
        this.y += this.dy;   

        //puntero, interactividad

        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
            && mouse.y - this.y < 50 && mouse.y - this.y > -50) {
            if(this.radius<maxRadius) {
                this.radius +=1;
            }
        }
        else if(this.radius > this.minRadius)
            this.radius -= 1;


        this.draw();
    }       
}

let circleArray = [];
let x, y, dx, dy;   
let radius;
let maxRadius = 50;
let numbolas = 1000;
let colores = [
    "#2C3E50",
    "#E74C3C",
    "#ECF0F1",
    "#349BDB",
    "#2980B9"
];



function init()
{
    circleArray = [];
    for(let i = 0; i < numbolas; i++) {
        radius = Math.random() * 3 + 1;
        x = Math.random() * (innerWidth-radius * 2) + radius;                
        y = Math.random() * (innerHeight-radius * 2) + radius;                
        dx = (Math.random()-0.5) * 5;
        dy = (Math.random()-0.5) * 5;
    
        circleArray.push(new Circle(x,y,dx,dy,radius))
    }
}

function animar()
{
    requestAnimationFrame(animar);

    c.clearRect(0, 0, window.innerWidth, window.innerHeight)
        
    for(let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
    
}
init();
animar();