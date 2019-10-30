function setup() {
  // put setup code here
  createCanvas(480,120);
  background(244,194,194);
}

function draw() {
  // put drawing code here



  background(204,226,255);  // Dark blue color
    fill(255,0,0,160);        // Red color
    ellipse(132,82,200,200); // Red circle
    fill(0,255,0,160);        // Green color
    ellipse(288,-16,200,200);  // Green circle
    fill(0,0,255,160);        // Blue color
    ellipse(268,118,200,200);  // Blue circle

fill(204);
    beginShape();
  vertex(180,82);
  vertex(207,36);
  vertex(214,63);
  vertex(407,11);
  vertex(412,30);
  vertex(219,82);
  vertex(226,109);
    endShape(CLOSE);



}
