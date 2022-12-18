
let Times = parseInt(prompt("Enter the number of times: "));
let dice = Math.floor((Math.random()*6)+1);

for (let i=1; i<=Times ; i++) {
  document.getElementById("Dice").innerText= "This is your name; " + dice;
}