function Chaser() {
  this.location = createVector(width/2, height/2);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);

  this.show = function() {
    fill(255);
    ellipse(this.location.x, this.location.y, 10, 10);
  }

  this.update = function() {
    var mouse = createVector(mouseX, mouseY);

    mouse.sub(this.location);
    mouse.setMag(0.8);
    this.acceleration = mouse;
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(5);
  }
}
