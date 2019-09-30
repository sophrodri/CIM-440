var questions = ["Is iceland always covered in ice?","What ocean lies east of the US?"];
var options = ["1) True  2) False","1) Pacific  2) Eastern  3) Indian  4) Atlantic"];
var answers = [1,3];

var buttons = [];

var currentOption = -1;
// -1 because when the user clicks on one of the buttons, the user answered a question. -1 is the inactive state/
  // going to wait

var currentQuestion = 0;
// we want to start with the first question

var answerText = "";


function setup() {
  // put setup code here
  createCanvas(400,400);

  buttons[0]= createButton("1");
  buttons[0].position(10,300);
  buttons[0].mousePressed(function(){
    currentOption = 0
  });// end of mousePressed 0

  buttons[1]= createButton("2");
  buttons[1].position(50,300);
  buttons[1].mousePressed(function(){
    currentOption = 1
  });// end of mousePressed 0

  buttons[2]= createButton("3");
  buttons[2].position(90,300);
  buttons[2].mousePressed(function(){
    currentOption = 2
  });// end of mousePressed 0

  buttons[3]= createButton("4");
  buttons[3].position(130,300);
  buttons[3].mousePressed(function(){
    currentOption = 3
  });// end of mousePressed 0


}// END of SETUP



function draw() {
  // put drawing code here
background(255);
//text(questions[0], 20,100);
//text(options[0], 20,150);
text(questions[currentQuestion], 20, 100);
text(options[currentQuestion], 20, 150);

text(answerText, 20, 200);


  if(currentOption != -1){
    // do something -- also != means "not equal to"
    //if(currentOption){}
    console.log("currentOption" + currentOption);
    answerText = "Correct";

    if(currentOption == answers[currentQuestion]){
      console.log("Correct");
      currentQuestion = currentQuestion + 1; // if the user selects the corrent answer, it will go onto the next questions

    if(currentQuestion == questions.length){
      currentQuestion = 0; // get the answer correct for last question, you start again from the beginning.
        // array.length = counts how many items are in the array;
      // if currentQuestion == 2 _> goes back to the beginning
    }

    }else{
      console.log("incorrect");
      answerText = "Incorrect";
    }// end of Checking if answer is correct or incorrect


  //reset to Inactive State
  currentOption = -1;
    // wait for the user to make a selection .. user makes a selection .. then the program will wait for THE NEW response again, for the new question. 


  }// END of currentOption != 1


}// END of DRAW
