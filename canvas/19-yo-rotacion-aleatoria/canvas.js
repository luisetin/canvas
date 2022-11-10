const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let particulas = [];
let clicando = false;

class Particula {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 5 ;
        this.vy = (Math.random() - 0.5) * 5;
        this.size = Math.random() * 35 + 15;
        this.maxSize = Math.random() * 10 + 2;
        this.angleX = Math.random() * 6.2;
        this.angleY = Math.random() * 6.2;
        this.vax = Math.random() * 0.6 - 0.3;
        this.vay = Math.random() * 0.6 - 0.3;
    }


    update() {



        this.x += this.vx + Math.sin(this.angleX);
        this.y += this.vy + Math.sin(this.angleY);

        if(this.size > this.maxSize)
            this.size-=0.5;

        this.angleX += this.vax;
        this.angleY += this.vay;
        
        this.draw();
    }

    draw() {
        c.strokeStyle = "black";
        c.fillStyle = "green";
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI*2);
        c.fill();
        c.stroke();
        c.closePath();
    }
}





function animate() {
    requestAnimationFrame(animate);

    particulas.forEach(particula => {
        if(particula.size <= particula.maxSize)
            particulas.splice(particulas.indexOf(particula), 1);

        particula.update();
    });


}



window.addEventListener("mousemove", (e) => {
    if(clicando)
        particulas.push(new Particula(e.x,e.y));
}) 

window.addEventListener("mousedown", (e) => {
    clicando = true;
    for(let i = 0; i < 3; i++) {
        particulas.push(new Particula(e.x,e.y));
    }
}) 

window.addEventListener("mouseup", (e) => {
    clicando = false;
}) 






animate();