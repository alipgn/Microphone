function setup() {
createCanvas(windowWidth, windowHeight);
mic = new p5.AudioIn();
mic.start();
  
}

function draw() {
 
    background(255);

    imageMode(CENTER);
 
  var volume = mic.getLevel();
  var newMax = 30;
  volume = map(volume,0,1,0,newMax);
  
  push();
  var size = map(volume,0,1,width/40,width/20);
  noStroke();
  fill(10,10,10);
  ellipse(width/2+45, height/2+70,size);
  pop(); 
  
    
  push();
  var size = map(volume,0,1,width/10,width/70);
  noStroke();
  fill(40,100,210);
  ellipse(width/2+95, height/2-30,size);
  pop(); 
    
  push();
  var size = map(volume,0,1,width/2,width/70);
  noStroke();
  fill(140,20,210);
  rect(30,30,width/2-145, height/2+20,size);
  pop();
    
  push();
  var size = map(volume,0,5,width/30,width/4);
  noStroke();
  fill(10,20,210);
  rect(10,10,width/2+25, height/2-50,size);
  pop();
    
    var size = map(volume,0,1,width/40,width/20);
    textFont('Courier');
    textSize(size);
    fill(10);
    text("Everything will disappear!",width/2-110,height/1-50,1000);
}

function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
      

    
} 
