

window.addEventListener("keydown", (event) => {
    switch(event.key) {
        case "ArrowUp":
            if(player.sides.bottom == canvas.height) player.velocity.y = -15;
            break;

        case "ArrowRight":
            keys.right.pressed = true;
            break;

        case "ArrowLeft": 
            keys.left.pressed = true;
            break;
        }
})


window.addEventListener("keyup", (event) => {
    switch(event.key) {
        case "ArrowRight":
            keys.right.pressed = false;
            break;


        case "ArrowLeft":
            keys.left.pressed = false;
            break;
    }
})