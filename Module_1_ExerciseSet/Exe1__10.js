
//The code is not working as correctly yet, I guess my understanding of the question is still wrong.

var numDice =  parseInt(prompt("Enter the number of dice you want :"));
var numEyes = parseInt(prompt("Enter the sum of eyes you want :"));

//here, this function roll the dice
function roll(){
  return Math.floor(Math.random() * numEyes) +1;
}

//here I try to sum all the results of the rolls
function simulation () {
  let sum = 0;
  let i = 1;

  while (i <= numDice) {
    let user = roll()
    sum += user;
    i++;
  }
  return sum;
}
//probability = Number of expected outcome/total number of possible outcome
//I try to use the sum of the rolls to get the probability of the event.
function probablity() {
  let x = simulation(numDice);
  return (x/(numEyes*numDice))*100;
}
//The result is not what I want
let y = probablity().toFixed(2); //Here I used toFixed() to limit the decimal places
console.log(`The probability is ${y}%`);
document.getElementById("Show").innerText=`The probability is ${y}%`;



