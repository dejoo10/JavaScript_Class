

let elem = document.getElementById("target"); //This will get the ID target from the html
const list = ["First item", "Second item", "Third item"]; //I created the array of items i want to add to the list in html
for (let i=0; i<list.length; i++) {                       //This will iterate through the array
  var li = document.createElement("li");         //This will create the element li where the items will be listed
  li.innerText=list[i];
  elem.appendChild(li)                          //This will append each one to the list

}
document.querySelector("#target").classList.toggle("my-item");