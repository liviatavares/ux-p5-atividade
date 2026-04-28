function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  angleMode(DEGREES);
}

function draw() {
  background(245); // Tom de branco levemente acinzentado do quadro original

  // Interação: pequena oscilação baseada no movimento do mouse
  let hoverEffect = map(mouseX, 0, width, -2, 2);

  // --- GRUPO SUPERIOR ESQUERDO ---
  push();
  translate(150, 250);
  rotate(hoverEffect);
  
  // Linhas pretas finas
  stroke(0);
  strokeWeight(1);
  line(50, -200, -50, 200);
  line(55, -200, -45, 200);
  
  // Linha azul grossa
  stroke(0, 40, 180);
  strokeWeight(6);
  line(-100, -180, 80, 230);
  
  // Quadrados azuis
  noStroke();
  fill(0, 40, 180);
  push();
  rotate(-25);
  rect(-65, -10, 75, 75); // Quadrado esquerdo
  pop();
  
  push();
  rotate(-25);
  rect(25, 65, 75, 75); // Quadrado direito
  pop();
  pop();

  // --- GRUPO SUPERIOR DIREITO ---
  push();
  translate(450, 150);
  rotate(hoverEffect * -1);
  
  // Linha preta diagonal
  stroke(0);
  strokeWeight(1);
  line(-80, -90, 50, 80);
  
  // Linha azul horizontal
  stroke(0, 40, 180);
  strokeWeight(3);
  line(-120, -5, 100, -5);
  
  // Quadrado azul
  noStroke();
  fill(0, 40, 180);
  rect(30, -43, 65, 65);
  pop();

  // --- GRUPO INFERIOR DIREITO ---
  push();
  translate(400, 450);
  rotate(hoverEffect * 0.5);
  
  // Linha preta diagonal longa
  stroke(0);
  strokeWeight(1);
  line(-150, 70, 100, -80);
  
  // Linha azul vertical inclinada
  stroke(0, 40, 180);
  strokeWeight(5);
  line(-20, 120, 55, -250);
  
  // Quadrado azul superior
  noStroke();
  fill(0, 40, 180);
  push();
  translate(-30, -70);
  rotate(10);
  rect(0, 0, 75, 75);
  pop();
  
  // Quadrado azul inferior
  push();
  translate(50, 20);
  rotate(10);
  rect(0, 0, 80, 80);
  pop();
  pop();
}
