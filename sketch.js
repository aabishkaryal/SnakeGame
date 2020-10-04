// The scale factor
var scl;
// The food(obj) for snake
var food;
// The snake(obj)
var snake;

function setup() {
  createCanvas(400, 400);
  scl = 20;
  food = new Food();
  snake = new Snake();
  //Pick location that isn't in snake and fits with the scale
  food.pickLocation(snake);
  //Slow down the framerate for classic experience
  frameRate(6)
}

function draw() {
  background(0);
  //Update Snake location
  snake.update();
  //Check if snake is at food location and eats it
  if (snake.eats(food)) {
    // If eaten choose another location
    food.pickLocation(snake);
  }
  //Display the snake
  snake.show();
  // Display the food
  food.show();

}
// Key Controls:
function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.changeDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.changeDir(0, 1);
  } else if (keyCode === LEFT_ARROW) {
    snake.changeDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.changeDir(1, 0);
  }
}

//Pause Control:
// Press 'p' to pause and 'r' to resume
function keyTyped() {
  if (key === 'p') {
    frameRate(0);
  } else if(key ==='r'){
    frameRate(6);
  } 
}

//Debug help code
// function mousePressed() {
//   snake.length++;
// }