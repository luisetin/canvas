


//disparar bala
window.addEventListener("keydown", (e) => {

  

});


window.addEventListener("mousedown", ()=> {


    balas.push(new Bala());
    mouse.click = true;
    


})

window.addEventListener("mouseup", ()=> {
    mouse.click = false;
})

//posición del ratón
window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

//pulsacion de teclas (movimiento)
window.addEventListener("keydown", (event) => {
    // let x = 0;
    // let y = 0;
    // let teclas = ["ArrowUp","ArrowDown", "ArrowRight","ArrowLeft"];
    switch(event.key) {

        case "w":
            keys.w.pressed = true;
            break;
        case "s":
            keys.s.pressed = true;
            break;
        case "d":
            keys.d.pressed = true;
            break;
        case "a":
            keys.a.pressed = true;
            break;



    
        // case "ArrowUp":
        //     y = -1;
        //     break
        // case "ArrowDown":
        //     y = 1;
        //     break
        // case "ArrowRight":
        //     x = 1;
        //     break
        // case "ArrowLeft":
        //     x = -1;
        //     break; 
    

        }
    // if(teclas.includes(event .key))
    //  balas.push(new Bala(x, y));
})

window.addEventListener("keyup", (event) => {
    switch(event.key) {
        case "w":
            keys.w.pressed = false;
            break;
        case "s":
            keys.s.pressed = false;
            break;
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
    }
})