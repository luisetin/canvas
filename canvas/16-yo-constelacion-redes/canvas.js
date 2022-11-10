const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d")


canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = [];
let hue = 0;
let blanco = false;
let clicando = false;

const mouse = {
    x: undefined,
    y: undefined,
};

window.addEventListener("mousedown", () => {
    clicando = true;
}) 
window.addEventListener("mouseup", () => {
    clicando = false;
})

window.addEventListener("mousemove", (e) => {

    if(clicando) {
        mouse.x = e.x;
        mouse.y = e.y;
    
        for(let i = 0; i < 2; i++) {
            particles.push(new Particle());
        }
    }
})

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();
})

window.addEventListener("click", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

   

    for(let i = 0; i < 10; i++) {
        particles.push(new Particle());
    }
})




function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < particles.length; i++) {
        particles[i].update();

        for(let j = i; j < particles.length; j++) {
            
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if(distance < 150) {
                c.beginPath();
                c.lineWidth = 0.5;
                c.strokeStyle = particles[i].color;
                c.moveTo(particles[i].x, particles[i].y);
                c.lineTo(particles[j].x, particles[j].y);
                c.stroke();
                // c.closePath();
            }

        }


        if(particles[i].radius <= 0.3) {
            particles.splice(i, 1);
            i--;
        }

    }


    hue++;

}

animate();


