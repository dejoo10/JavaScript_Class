const num = [];

let user = 1;
while (user!==0) {
  let user = parseInt(prompt("Enter any number except 0: ")); //this will take input from the user
  if (user === 0) {                                               //if user enter 0, loop is terminated
    break;
  }
  num.push(user);                                 //here the values are added to the empty array "num".
}
console.log(num);                         //I added this to let me view what I have entered.
num.sort(function(a,b){                   //This will sort the array content in descending order
  return a - b;
    });

console.log(num)





