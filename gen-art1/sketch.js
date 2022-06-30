function setup() {
  createCanvas(400, 400)
  angleMode(DEGREES)
}

function draw() {
  background(27,248,221,1)

  translate(width/2, height/2)

  noFill()

  strokeWeight(8)
  
  for (var n = 0; n < 15; n++){
    stroke(45, 100+n*10, 200)
    beginShape()
    for (var i = 0; i<360; i+=1){
      var rad = map(sin(i*6+frameCount), -1, 1, 0, 400)
      var x = rad * cos(10*i)
      var y = rad * sin(10*i)
      vertex(x,y)
    }
    endShape(CLOSE)
    rotate(frameCount/10)
  }
}
