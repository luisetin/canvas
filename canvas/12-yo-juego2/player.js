class Player { 

    constructor(color) {
        this.width = 100;
        this.height = 20;
        this.dx = 5;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height - 100;
        this.color = color;
    }



    update() {



        
        
        //controlar paredes
        if(this.x <= 0 || this.x + this.width >= canvas.width)
            this.dx = -this.dx;        
        
        
        this.x += this.dx;



        this.draw();
    }



    draw() {
        
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);

    }

}