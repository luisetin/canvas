const canvas = document.querySelector('canvas');
const c = canvas.getContext("2d");


canvas.width = innerWidth;
canvas.height = innerHeight;



document.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

let mouse = {
    x: undefined,
    y: undefined
};


let bola = new Bola();






function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = 'black';
    c.fillRect(0,0,canvas.width,canvas.height);

    bola.update();
}

animate();

