
//Here, the inputs will be taken from the user and stored
const a = document.getElementById("num1");
const b = document.getElementById("num2");

const selectedOperation = document.getElementById("operation");

const startPush = document.getElementById("start");
const answerView = document.getElementById("result");

startPush.addEventListener("click",
    function calCulate(){
  let x = Number(a.value); //I converted the values of the inputs to numbers
  let y = Number(b.value);
  let operation = selectedOperation.value;// I stored the operation option user want here

  //Here answer is stored depending on the operation selected
  let answer;
  if (operation === "add") { //for the addition operation
    answer = x+y;
  } else if (operation === "sub") { //for the subtraction operation
    answer = x - y;
  } else if (operation === "multi") { //for the multiplication operation
    answer = x * y;
  } else if (operation === "div") { //for the division operation
    answer = x/y;
  } else {
    answer = "Error! answer can not be found";
  }

//Here, I am printing the result of the answer to the html
  answerView.innerHTML = answer;
    });