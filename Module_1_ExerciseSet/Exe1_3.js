
//This part will promt the user for numbers//
var num1 = parseInt(prompt("Enter the first number: "));
var num2 = parseInt(prompt("Enter the second number: "));
var num3 = parseInt(prompt("Enter the third number: "));
var div = 3;

//here, the values are stored//
var num_sum = num1+num2+num3;
var prod = num1*num2*num3;
var ave = (num1+num2+num3 )/div;

//this will print the result to the html//
  document.getElementById("Sum").innerText = "Sum= " + num_sum;

  document.getElementById("Prod").innerText = "Product= " + prod;

  document.getElementById("Ave").innerText = "Average= " + ave;