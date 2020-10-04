// The Food Class

class Food {

  //pick a random location for food to appear
  // that is not inside the snake body and in the grid
  // setup by the scale factor
  pickLocation(snake) {
    var x, y;
    do {
      // the number of columns according to the scale factor
      var cols = floor(width / scl);
      // the number of rows according to the scale factor
      var rows = floor(height / scl);
      // random column
      x = floor(random(cols));
      // random row
      y = floor(random(rows));
      // Check if the new position collides the snake
      // If yes repeat the above process again
    } while (this.checkIntersection(snake,
        x * scl,
        y * scl));
    // If no fix the new position 
    this.pos = createVector(x * scl, y * scl);
  }

  // Show the food to the screen
  show() {
    // Fill Red
    fill(255, 0, 0);
    // draw a rectangle to show food
    rect(this.pos.x, this.pos.y, scl, scl);
  }
  
  //Method to check if food position collides with snake body
  checkIntersection(snake, x, y) {
    for (var i = 0; i < snake.length; i++) {
      var pos = snake.tail[i];
      if (pos[0] == x && pos[1] == y) {
        return true;
      }
    }
    return false;
  }
}