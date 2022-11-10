const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

//eventos

window.addEventListener("resize", function() {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
})

window.addEventListener("mousemove", function(e) {
    mouse.x = e.x;
    mouse.y = e.y;
})



//variable seguimiento raton
let mouse = {
    x: undefined,
    y: undefined
};

//variables
let particles;
let numparticle = 150;
let x,y;
let radius = 20;
let color = "black";


//funciones
function init() {

    particles = [];
    for(let i = 0; i < numparticle;i++) {
        x = randNum(radius, canvas.width-radius);
        y = randNum(radius, canvas.height-radius);

        //comprobar que la distancia entre cada particula y la nueva es mayor que 0 + el diametro   
        if(i != 0) {
            for(let j = 0; j < particles.length; j++) {
                if(getDistance(x,y,particles[j].x,particles[j].y) < 0 + radius * 2)  {
                    x = randNum(radius, canvas.width-radius);
                    y = randNum(radius, canvas.height-radius);

                    j = -1;
                }
            }

        }



        particles.push(new Particle(x,y,radius,color))
    }

}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    particles.forEach(particle => {
        particle.update(particles);
    });

}

init();
animate();