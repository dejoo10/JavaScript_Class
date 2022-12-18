

if (confirm("Should I calculate the square root") === true) {
  let num1 = parseInt(prompt("Enter the number: "));
squareRoot = num1**(0.5);

  document.getElementById("Square").innerText="Square Root is: " + squareRoot;

} else {
  document.getElementById("Square").innerText="The square root is not calculated";
}


