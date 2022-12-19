            //This will create the list and ask user for total number of list
var listPart = [];
const numPart = parseInt(prompt("Enter total number of participants: "));

            //This loop will let you enter names until it is total you want
for (let i=0; i <=numPart; i++){
  listPart[i] = prompt("Enter the name of participants: ");
}
            //This will sort them alphabetically
nameSort = listPart.sort();

              //This will list the items orderly in Html

let list =document.getElementById("Order");
for (let i =0; i<nameSort.length; i++) {
  var li = document.createElement("li");
  li.innerText=nameSort[i];
  list.appendChild(li)}

