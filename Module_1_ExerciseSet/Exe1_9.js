

const user = parseInt(prompt("Enter a positive number: ")); //user enter number here//
let n = 0

//This function test if it is a prime number or not//
function isPrime(number) {
  if (number === 1) {
    document.getElementById("Prime").innerText= number + " is a prime number";

  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        n = 1
        break;
      }
    }
  }
  if (n ===1){
    document.getElementById("Prime").innerText= number + " is not not a prime number";
    console.log(number)
  } else if (n !== 1) {
    document.getElementById("Prime").innerText= number + " is a prime number";
    console.log(number)
  }
}

isPrime(user);


