var t;
var theta;
var maxFrameCount = 200; 

function setup() {
  createCanvas(540, 540);
  noStroke();
}

function draw() {
  background(0);
  translate(width/2, height/2); 
  var t = frameCount/maxFrameCount;
  theta = 3.14*t;

  for ( var x= -175; x <= 275; x += 55) {
    for (var y= -100; y <= 275; y += 55) {
      var offSet = 50*x+20*y;   
      var x2 = map(cos(-theta+offSet), 0, 1, 0, 25); 
      var y2 = map(cos(-theta+offSet), 0, 1, 25, 0); 
      var sz2 = map(sin(-theta+offSet), 0, 1, 15, 45); 
      fill(random(150,235), random(150,235), random(150,235)); 
      ellipse(x+x2*2, y-y2*3, sz2, sz2);
    }
  }
}