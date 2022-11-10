const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

window.addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
})


let mouse = {
    x: undefined, y: undefined
};






//variables
let cuadrado1, cuadrado2;


function init() {
    cuadrado1 = new Square(100,100, 200, 300, "purple");
    cuadrado2 = new Square(200,200, 150, 100, "yellow");
}



function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width,canvas.height);

    cuadrado1.update();
    cuadrado2.x = mouse.x - (cuadrado2.width / 2);
    cuadrado2.y = mouse.y - (cuadrado2.height / 2);
    cuadrado2.update();

    //comprobar colision

    if(cuadrado1.x + cuadrado1.width>= cuadrado2.x      
        && cuadrado1.x <= cuadrado2.x + cuadrado2.width
        && cuadrado1.y + cuadrado1.height >= cuadrado2.y
        && cuadrado1.y <= cuadrado2.y + cuadrado2.height) {
            cuadrado1.color = "yellow";
        }
    else
        cuadrado1.color = "purple";
        

}


init();
animate();

