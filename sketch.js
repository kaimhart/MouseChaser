var chaser;

function setup() {
  createCanvas(400, 400);
  chaser = new Chaser();
  fill(255);
}

function draw() {
  background(50);
  chaser.show();
}
