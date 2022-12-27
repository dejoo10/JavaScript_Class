
'use strict';
console.log('the script starts');

function synchronousFunction() {
  let number = 1;
  for(let i = 1; i < 100000; i++){
    number += i;
    console.log('synchronousFunction running');
  }
  console.log('regular function complete', number);
}

async function asynchronousFunction() {
  console.log("asynchronous download begins");
  try {
    const response = await fetch("https://api.tvmaze.com/shows/1/episodes");
    const jsonData = await response.json();
    console.log(jsonData.name, jsonData.season);
  } catch (error) {
    console.log(error.message);
  } finally {
      console.log("asynchronous load complete");
    }

}
synchronousFunction();
asynchronousFunction();