let capture;
var cnv;

function setup() {
  cnv = createCanvas(480, 480);
  capture = createCapture(VIDEO);
  capture.id = "vid";
  capture.hide();


}

function draw() {
  image(capture, 0, 0, width, width * capture.height / capture.width);
  //filter(INVERT);
  image(capture, 10, 10, width, width * capture.height / capture.width);

}

function mousePressed(){
//   saveCanvas(cnv, 'myCanvas', 'jpg');
//
//   createImg(
//   '/Users/sophiarodriguez/Downloads/myCanvas.jpg',
//   'the p5 magenta asterisk'
// );

}
// create filters on photoshop
  // filter selection -> take a picture and capture canvas saves the photo with the filter you selected.

  
