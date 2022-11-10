const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

//eventos
window.addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;    
})

let mouse = {x: undefined, y: undefined};

window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
})  

window.addEventListener("click", añadirBola);






let bolas = [];
let numbolas = 10;
let radius = 30;
let dy = 6;
let dx = 0;

function init() {

}

function añadirBola() {
    bolas.push(new Bola(mouse.x, mouse.y,radius));
}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);
    
    bolas.forEach(bola => {
        bola.update(bolas);
    });
}



init();
animate();