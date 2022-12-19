
                //This function performs the dice rolling
function diceRoll() {
  var roll= Math.floor(Math.random()*6 +1);
  return roll
}
                // here the main program roll the dice
let name = diceRoll()

              // The program get into the loop where it stops where it is a 6
while (name < 6) {
  name = diceRoll()

                        //Here the program append the values to html list
  let list=document.getElementById("Roll");
  for (let i=0; i<name; i++) {
  //  console.log(name)
                        //document.getElementById("Son").innerText = "roll=" + name;
    var li = document.createElement("li");
    li.innerText=name;
    list.appendChild(li)

  }
}
