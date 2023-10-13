class Circle {
    x;
    y;
    color;
    radius;
    canvas;
    ctx;
    flag;

    constructor(x, y, color, radius) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.canvas = document.getElementById('myCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.flag = "top";
    }

    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x,this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.closePath();
    }

    move(){
        this.clear();
        if (this.y <= this.radius) {
            this.flag = 'bottom';
        } else if (this.y + this.radius >= this.canvas.height) {
            this.flag = 'top';
        }

        switch (this.flag) {
            case 'bottom':
                this.moveBottom();
                break;
            case 'top':
                this.moveTop();
                break;
        }
    }

    moveTop() {
        this.y -= 5;
    }

    moveBottom() {
        this.y += 5;
    }

    clear() {
        this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)
    }

    collide(bar){
        if(this.y + this.radius >= bar.y
            && this.x  >= bar.x && this.x <= bar.x + bar.width){
            this.flag = 'top';
        }
    }

}