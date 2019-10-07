var interval = 1000; // if you want it to do something by seconds. 1000 milliseconds = 1 second
var prevMillis = 0; // time stamp that



function setup() {
  // put setup code here



}// END of SETUP

function draw() {
  // put drawing code here
  //console.log(millis()); // runs program in milliseconds.
    // track after certain amount of time - Do something

if(millis() - prevMillis > interval) {
  // do something
  prevMillis = millus();
  counter = counter + 1;
  console.log(counter);

  //if millis is 0, (0-0=0) is that greater than our interval? NO
    //once hits 1001, this becomes true and prevMillus is subtracted by until the newMillus reaches 2002 > 1000 (inteval)

}//end of IF

}// END of Draw
