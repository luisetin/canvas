const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

//setup
canvas.width = 1024;
canvas.height = 576;








const player = new Player();

const keys = {
    up: {
        pressed: false
    },
    left: {
        pressed: false
    },
    right: {
        pressed: false
    }
    
}

//bucle animacion
function animate() {
    requestAnimationFrame(animate);
    // c.clearRect(0,0,canvas.width,canvas.height);
    c.fillStyle = "white";
    c.fillRect(0,0,canvas.width,canvas.height);

    player.update();

}


animate();