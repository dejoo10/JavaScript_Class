            //This will create the list and ask user for total number of list
var listPart = [];
const numPart = parseInt(prompt("Enter total number of participants: "));

            //This loop will let you enter names until it is total you want
for (let i=0; i <=numPart; i++){
  listPart[i] = prompt("Enter the name of participants: ");
}
gun = listPart.sort();
document.getElementById("Order").innerText= "Participant ordered list:" + gun;

