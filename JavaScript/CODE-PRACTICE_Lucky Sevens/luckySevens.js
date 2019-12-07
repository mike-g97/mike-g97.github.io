var gameMoney = 0.00;
var startBet = 0.00;
var maxWon = 0.00;
var rollsTaken = 0;
var rollsMax = 0;

function play(){
  startBet = Number(document.getElementById("startBet").value);
  console.log("Starting Bet: "+startBet);

  if(startBet <= 0){
    alert("Error: Starting Bet Value Not Valid!");
  }else if(startBet > 0){
    gameMoney = startBet;
    maxWon = startBet;
    console.log("Game Money: "+gameMoney);
  }

  while(gameMoney > 0){
    var diceVal= rollDice() + rollDice();
    if(diceVal == 7){
      gameMoney += 4;
      updateMaxWon();
      console.log("\n------------");
      console.log("You hit a Lucky Seven!!");
      console.log("Game money no is: "+gameMoney);
      console.log("\n------------")
    }else{
      gameMoney -= 1;
      console.log("\n------------");
      console.log("You did not hit a Lucky Seven!!");
      console.log("Game money now is: "+gameMoney);
      console.log("\n------------")
    }
  }

  if(gameMoney <= 0){
    alert("GAME OVER");
    console.log("Max Won: "+maxWon+"\n");
    displayResults();
    document.getElementById("output").style.visibility = "visible";
  }


}

function rollDice() {
  rollsTaken++;
  return Math.floor(Math.random() * 6) + 1;
}

function updateMaxWon(){
  if(gameMoney >= maxWon)
  maxWon = gameMoney;
  rollsMax++;
}

function displayResults(){
  document.getElementById("startBetOutput").innerHTML = startBet;
  document.getElementById("rollsTaken").innerHTML = rollsTaken;
  document.getElementById("maxWon").innerHTML = maxWon;
  document.getElementById("rollsMax").innerHTML = rollsMax;
}
