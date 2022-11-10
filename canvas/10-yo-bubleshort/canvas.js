// import * as dat from "dat.gui";
const gui = new dat.GUI();

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const sorter = {
    velocidad: 1,
}


gui.add(sorter, "velocidad", 1, 1000);


let arrayL = [];


function init() {
    
    for(let i = 0; i <innerWidth; i++) {
        arrayL.push(rand(0, innerHeight))
    }
    
}


function ordenar() {
    //pasar esto a el requestanimateframe sin el for(manual sumando i y j con condicion if para acabar)
    for(let i = 0; i < arrayL.length; i++) {
        for(let j = 0; j < arrayL.length-i-1; j++) {
            if(arrayL[j] > arrayL[j+1]) {
                let aux;
                aux = arrayL[j];
                arrayL[j] = arrayL[j+1];
                arrayL[j+1] = aux;
            }

        }
    }
}
function draw() {

    for(let k = 0; k < arrayL.length; k++) {

        c.beginPath();
        c.moveTo(k, innerHeight);
        c.lineTo(k, arrayL[k]);
        
    //     if(k == j) {
    //         c.beginPath()
    //         c.moveTo(k, 0)
    //         c.strokeStyle = "red"
    //         c.lineTo(k, innerHeight)
    //         c.stroke()
    //     }
    //     else
    //     {
    //     c.strokeStyle ="black";
        
    // }
        c.strokeStyle = "black  ";
        c.stroke();

    }

}   
let velocidad = 500;  
let j = 0;
let i = 0;
function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    

    for(n=0; n < sorter.velocidad; n++)
    {

        if(i < arrayL.length)
        {
            if(j < arrayL.length-i-1)
            {
                if(arrayL[j] < arrayL[j+1]) {
                    let aux;
                    aux = arrayL[j];
                    arrayL[j] = arrayL[j+1];
                    arrayL[j+1] = aux;
            
                }

                j++;
            }
            else{
                i++
                j = 0;
            }
            
        }

}
    console.log(i, j)
    draw();

}



function rand(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


init();
// ordenar();
// draw();
animate();