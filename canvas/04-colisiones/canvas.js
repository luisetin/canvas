const canvas = document.querySelector("canvas");

c = canvas.getContext("2d");

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

//variables
let mouse = {
    x: undefined,
    y: undefined
};

let circle1, circle2;





function init() {
    circle1 = new Circle(300,300,100,"red");
    circle2 = new Circle(undefined , undefined,50 ,"black");
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();


    if(getDistance(circle1.x,circle1.y,circle2.x,circle2.y) < circle1.radius + circle2.radius)
        circle1.color = "   black";
    else
        circle1.color = "red"     

}


init();
animate();