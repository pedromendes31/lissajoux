var x, y, t=0;
var largura=400;
var altura=300;
var caminho= [];
var pos;
var pos

function setup() {
  createCanvas(800,600);

}

function draw() {
  background(149,66,244)

  x=(largura)+largura*cos(5**PI*t+PI)/2;
  y=(altura)-altura*cos(2**PI*t)/2;

  var posicao=createVector(x,y);
  caminho.push(posicao);

for (var i = 0; i < caminho.length; i++) {
    ellipse(caminho[i].x,caminho[i].y,5,5)
}

  t=t+0.03;

}
