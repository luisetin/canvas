const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;


function init() {
    
    
}

let intervalo;

function drawCircle(x, y, dia) {


    if(dia > 1) {
        c.beginPath();
        c.arc(x, y, dia, 0, 2*Math.PI);
        c.strokeStyle = "white";
        // c.globalAlpha = 0.5;
        c.stroke();
        
        let shrink = 0.75;
    
        setTimeout(() => {
            drawCircle(x+dia*2, y, dia*shrink);
            drawCircle(x-dia*2, y, dia*shrink);
            // drawCircle(innerWidth/2, y+dia*2, dia*shrink)
            // drawCircle(innerWidth/2, y-dia*2, dia*shrink)
            // drawCircle(x, y+dia, dia*shrink);
            // drawCircle(x, y-dia, dia*shrink);
        }, 200);
        // drawCircle(x + dia, y ,dia * shrink);
        // drawCircle(x - dia, y ,dia * shrink);
        // drawCircle(x + dia, y + dia, dia * shrink);
        // drawCircle(x- dia, y - dia, dia *shrink)
            // drawCircle(x, y - dia, dia * shrink);        
        }
    else{
        clearInterval(intervalo);
    }
    
}




drawCircle(innerWidth/2,innerHeight/2, 150);
