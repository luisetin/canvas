const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerWidth;


window.addEventListener("resize", () => {
    canvas.width = innerWidth;
    canvas.height = innerWidth;
})

window.addEventListener("keydown", (e) => {
    if(e.key == "ArrowUp")
        teclaPulsada = "up";
    else if(e.key == "ArrowDown")
        teclaPulsada = "down";

})

// window.addEventListener("keyup", (e) => {

//     //posible arreglo para cuando se queda pillado al intercalar teclas de sewgudo
//     // if(e.key == "ArrowUp" && teclaPulsada == "down" || e.key == "ArrowDown" && teclaPulsada == "up")
//     //     return;
//     teclaPulsada = "null";
// })



let teclaPulsada;

let arrayPadel = [];
let pelota;

function init() {
    arrayPadel.push(new Padel("jugador"));
    arrayPadel.push(new Padel("bot"));
    pelota = new Pelota();
}




function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0, innerWidth, innerHeight);

    arrayPadel.forEach(padel =>{
        padel.update();
        padel.move(teclaPulsada);
    })

    pelota.update();        

}



init();
animate();