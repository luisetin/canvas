class Square{
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color; 
    }

    

    update() {


        this.draw();
    }







    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x,this.y,this.width,this.height);
        
        

    }
}