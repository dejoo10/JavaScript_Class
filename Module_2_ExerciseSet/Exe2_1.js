
const list = [];
                //this will prompt how much times I want to add
var totalArray = parseInt(prompt("Enter total number you will add"))
                //this loop let me add as much number as selected total
for (let i=0; i <= totalArray; i++ ) {

  list[i] = prompt("Enter your number");
                //This loop will read through the list and present the list forward
  for (let j = 0; j<=length.list; j++) {
    console.log(list)
                  //This loop will read through the list backward
  }
  for (let k =length.list - 1; k >= 0; k--) {
    console.log(list);
  }

}
  console.log(...list);




