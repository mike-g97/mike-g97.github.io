var startNum = 0;
var endNum = 0;
var step = 0;


function displayEvens(){
  startNum = Number(document.getElementById("startNum").value);
  endNum = Number(document.getElementById("endNum").value);
  step = Number(document.getElementById("step").value);

  if(isNaN(startNum)){
    console.log("Starting number not entered!");
  }
  if(isNaN(endNum)){
    console.log("Ending number not entered!");
  }
  if(isNaN(step)){
    console.log("Step number not entered!");
  }
  console.log("Starting Number: " +startNum);
  console.log("Ending Number: "+endNum);
  console.log("Step: "+step);

  document.getElementById("outputP1").innerText = "Here are the even numbers between " +startNum+ " and " +endNum+ " by " +step+ "'s:";
  for(var n = startNum; n < endNum; n += step){
    if(n % 2 == 0){
      console.log(n);
      var output = n + "\n";
      document.getElementById("outputP2").innerText += output;
    }
  }
}
