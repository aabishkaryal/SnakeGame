// The Snake Class

class Snake {

  // Initialize the defaults
  constructor() {
    var x = 0;
    var y = 0;
    // Using vector for position as they are mutable
    this.pos = createVector(floor(x), floor(y));
    // Vector for representinh movement direction
    this.dir = createVector(1, 0);
    // represents the snake tail(head included)
    this.tail = [];
    this.length = 1;
    // recording the position of snake immutabely
    this.tail.unshift([this.pos.x, this.pos.y]);
  }

  // Update the Snake Position
  update() {
    this.pos.x += this.dir.x * scl;
    this.pos.y += this.dir.y * scl;
    // recording the position of snake immutabely
    this.tail.unshift([this.pos.x, this.pos.y]);
    // Check if snake head hits the edge or itself
    if (this.checkEdges() || this.checkSelf()) {
      //If true reset the snake to start from default
      this.reset();
    }
  }

  // Display the snake to the screen
  show() {
    for (var i = 0; i < this.length; i++) {
      //White body
      fill(255);
      if (i == 0) {
        // Blue if it the first one i.e. head
        fill(0, 0, 255);
      }
      var pos = this.tail[i];
      // Display rectangles as snake body
      rect(pos[0], pos[1], scl, scl);
    }
    //Splice the tail to the length needed
    //(Memory optimization)
    this.tail.splice(this.length);
  }

  //Change Direction when keyPressed
  changeDir(xDir, yDir) {
    if (!((this.dir.x * -1) == xDir &&
        (this.dir.y * -1) == yDir)) {
      this.dir = createVector(xDir, yDir);
    }
  }

  //Check if food is eaten
  eats(food) {
    var eaten = false;
    // Calculate distance between snake head and food
    var d = dist(this.pos.x,
      this.pos.y,
      food.pos.x,
      food.pos.y);
    eaten = d < 1;
    if (eaten) {
      // Increase length of snake if eaten
      this.length += 1;
    }
    return eaten;
  }

  // Check if snake head hits the edge
  checkEdges() {
    return this.pos.x > width - scl ||
      this.pos.y > height - scl ||
      this.pos.x < 0 ||
      this.pos.y < 0;
  }

  //Check if snake head hits its body
  checkSelf() {
    for (var i = 1; i < this.length; i++) {
      var pos = this.tail[i];
      if (pos[0] == this.pos.x && pos[1] == this.pos.y) {
        return true;
      }
    }
  }
  
  //Reset the snake if it hits itself
  reset() {
    var x = 0;
    var y = 0;
    // Using vector for position as they are mutable
    this.pos = createVector(floor(x), floor(y));
    // Vector for representinh movement direction
    this.dir = createVector(1, 0);
    // represents the snake tail(head included)
    this.tail = [];
    this.length = 1;
    // recording the position of snake immutabely
    this.tail.unshift([this.pos.x, this.pos.y]);
  }
}