const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d")


canvas.width = innerWidth;
canvas.height = innerHeight;

const particles = [];
let hue = 0;
let blanco = false;

const mouse = {
    x: undefined,
    y: undefined,
};

let clicando = false;

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
    
        for(let i = 0; i < 20; i++) {
            particles.push(new Particle());
        }
    }
})

window.addEventListener("contextmenu", (e) => {
    e.preventDefault();

    if(blanco)
        blanco = false;
    else
        blanco = true;
})

window.addEventListener("click", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;

   

    for(let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
})




function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(0,0,0,0.02)";
    c.fillRect(0,0,canvas.width,canvas.height);

    for(let i = 0; i < particles.length; i++) {
        particles[i].update();

        if(particles[i].radius <= 0.3) {
            particles.splice(i, 1);
            i--;
        }

    }


    hue++;

}

animate();


