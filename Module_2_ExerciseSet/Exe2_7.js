
                //This function performs the dice rolling
function diceRoll(sides) {
  var roll= Math.floor(Math.random()*sides +1);
  return roll
}

// here the main program roll the dice with the number of sides given
var sides = parseInt(prompt("Enter your number of sides"))
let name = diceRoll(sides)

              // The program get into the loop where it stops where it is a 6
while (name < sides) {
  name = diceRoll(sides)

                        //Here the program append the values to html list
  let list=document.getElementById("Roll");
  for (let i=0; i<sides; i++) {

                        //document.getElementById("Son").innerText = "roll=" + name;
    var li = document.createElement("li");
    li.innerText=name;
    list.appendChild(li)

  }
}
