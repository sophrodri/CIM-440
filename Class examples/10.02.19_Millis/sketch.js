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

  // Millis is the continuous clock. PrevMillis is what counts Millus, and what is needed to count the clock to then do an action
    // if Millus becomes 1001, 1001 becomes prevMillis, and Millis keeps going until (millus() - prevMillis > interval) becomes true.
      // 2002 - 1001 = 1001. 1001 > 1000. Then it repeats itself for the next second. 2043 - 2002 > 1000. 


}//end of IF

}// END of Draw
