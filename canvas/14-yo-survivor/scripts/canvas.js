const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;    
canvas.height = innerHeight;


const mouse = {
    x: undefined,
    y: undefined,
    click: false,
};

const keys = {
    w: {
        pressed: false,
    },
    s: {
        pressed: false,
    },
    d: {
        pressed: false,
    },
    a: {
        pressed: false,
    },
}

const player = new Player();

let balas = [];




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);


    player.update();

    balas.forEach(bala => {
        bala.update();
    })

}



animate();