
//This part accept the names of the dog and put them in a list
let nameDog = [];
for (let i=0; i<=5; i++) {
  nameDog[i] = prompt("Enter the name of the dog");

}
//This part append the name of the dogs to an unordered list in the HTML
let list =document.getElementById("Unlist");
for (let i =0; i<nameDog.length; i++) {
  var li = document.createElement("li");
  li.innerText=nameDog[i];
  list.appendChild(li);
}