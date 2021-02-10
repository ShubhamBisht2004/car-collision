var speed, weight;
var car, wall;

function setup() {
    createCanvas(1600, 400);
    speed = random(55, 90);
    weight = random(400, 1500);

    car = createSprite(100, 200, 50, 50);
    car.velocityX = speed;
    car.shapeColor = color(255);


    wall = createSprite(1500, 200, 60, 100)
    wall.shapeColor = color(80, 80, 80)


}

function draw() {
    background(0);
    if (isTouching(car, wall)) {
        car.velocityX = 0;
        var deformation = 0.5 * weight * speed * speed / 22509;
        if (deformation > 180) {
            car.shapeColor = color(255, 0, 0);
        }
        if (deformation < 180 && deformation > 100) {
            car.shapeColor = color(220, 230, 0);
        }
        if (deformation < 100) {
            car.shapeColor = color(0, 255, 0);
        }
    }
    drawSprites();
}