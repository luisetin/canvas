class Player {
    constructor() {

        this.width = 70;
        this.height = 70;
        this.color = "black";

        this.position = {
            x: canvas.width/2,
            y: canvas.height/2,
        };
        this.velocity = {
            x: 0,
            y: 0,
            speed: 5,
        };
    
    }


    update() {






        this.move();
        this.draw();
    }

    move() {
        this.velocity.x = 0;
        this.velocity.y = 0;

        if(keys.w.pressed) {
            this.velocity.y -= this.velocity.speed;
        }
        if(keys.s.pressed) {
            this.velocity.y += this.velocity.speed;
        }
        if(keys.a.pressed) {
            this.velocity.x -= this.velocity.speed;
        }
        if(keys.d.pressed) {
            this.velocity.x += this.velocity.speed;
        }


        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

    }


    draw() {

        c.fillStyle = this.color;
        c.fillRect(this.position.x, this.position.y, this.width, this.height);


    }



}