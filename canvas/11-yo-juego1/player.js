class Player {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.position = {
            x: 200,
            y: 200
        };
        this.velocity = {
            x: 0,
            y: 1
        };
        this.sides = {
            bottom: this.position.y + this.height,
        }
        this.gravity = 1;
    }




    update() {


        
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.sides.bottom = this.position.y + this.height;

        if(this.sides.bottom + this.velocity.y < canvas.height) {
            this.velocity.y += this.gravity;
        }
        else {
            this.velocity.y = 0;
        }



        this.move();
        this.draw();
    }




    move(){
        this.velocity.x = 0;
        if(keys.left.pressed)
            this.velocity.x += -10;  
            
        if(keys.right.pressed)
            this.velocity.x += 10;
    }

    draw() {
        c.fillStyle = "red";
        c.fillRect(this.position.x, this.position.y, this.width, this.height);

    }
}