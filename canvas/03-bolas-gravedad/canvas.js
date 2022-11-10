
const canvas = document.querySelector("canvas");

c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})



let ballArray = [];
let ballNum = 200;
let radius;
let gravity = 1;
let friction = 0.9;
let dx;
let dy;
let x;
let y;
let color;

function init() {
    ballArray = [];
    
    for(let i = 0; i < ballNum; i++) {

        radius = randNum(20,40);
        dx = randNum(-8,8);
        dy = randNum(-8,8);
        x = randNum(radius ,canvas.width - radius);
        y = randNum(0, canvas.height - radius);
        color = randColor();

        ballArray.push(new Ball(x, y, dx, dy,radius,color));

    }

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    ballArray.forEach(b => {
        b.update();
    });

       

}

init();
animate();
