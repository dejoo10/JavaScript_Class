
let Times = parseInt(prompt("Enter the number of times: "));
let dice = Math.floor((Math.random()*Times)+1);

for (let i=1; i<=Times ; i++) {
  dice +=i;
  console.log(dice);
  document.getElementById("Dice").innerText= "The sum of rolls is ; " + dice;
}