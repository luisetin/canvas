const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");


canvas.width = innerWidth;
canvas.height = innerHeight;


//cambiar direccion al pulsar el espacio
window.addEventListener("keydown", (e) => {
    if(e.key == " ")
        player.dx = -player.dx;
    if(e.key == "p")
        player2.dx = -player2.dx; 
})






const player = new Player("green");
const player2 = new Player("rebeccapurple");

//para que empiecen en direcciones contrarias
player2.dx = -player2.dx;

let arrayFrutas = [];

// const fruta = new Fruta();
let spawn;

function nuevaFruta() {
    arrayFrutas.push(new Fruta());
}




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);

    player.update();
    player2.update();
    arrayFrutas.forEach(fruta => {
        fruta.update();
    })

}

spawn = setInterval(nuevaFruta, 1500);

animate();
nuevaFruta();