let circle = new Circle(100,400,"red", 30);
let bar = new Bar(100, 400, 100, 20, "blue");

function play(){
    circle.move();
    bar.draw();
    circle.draw();
    circle.collide(bar)
    requestAnimationFrame(play);
}

play();
