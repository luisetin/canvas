const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let bola;

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

window.addEventListener("mousedown", () => {

    
    mouse.clicando = true;
    bola = new Bola();
    bolas.push(bola);

})

window.addEventListener("mouseup", () => {

})


const mouse = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    clicando: false,
};

const bolas = [];

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width, canvas.height);

    bolas.forEach(bola => {
        bola.update();
    })


}

animate();