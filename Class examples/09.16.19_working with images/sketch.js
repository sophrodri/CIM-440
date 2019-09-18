var puppyImage;


function preload(){
// makes sure it loads the media before we get it into setup or draw functions.
puppyImage = loadImage("puppies.jpg");

}//end of preload



function setup() {
  // put setup code here
createCanvas(400,400); // preload allows no refresh on the html

}//end of setup



function draw() {
  // put drawing code here
  // image var, x position, y position
image(puppyImage,0,0);
    // this webpage says "loading.."= error.
      // javascipt does not have access to your computer. JavaScript cant read your personal files.
        // 1st way to avoid: hosting the image online = put the url of the picture: in preload
        // 2nd is load picture in github : super hard tho. U have to run a local server on ur computer.
            // packages -> atom-live-server -> open server and then u will see the corner of the server


// image var,x pos, y pos, width, height
image(puppyImage,0,0,puppyImage.width/4,puppyImage.height/4);
// scale an image by dividing width/height by a number scales it proportionally.
  // Don't choose a random size
image(puppyImage,0,0,154,200); // puppy is distorted 



}// end of draw
