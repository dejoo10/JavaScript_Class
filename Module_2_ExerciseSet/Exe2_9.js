var list = [1,2,3,4,5,6,7,8,9,10]; //here is the array of numbers from 1-10


function even() {
  let newList = [];               //I created an empty array list to accept the new list
  for (let i = 0; i < list.length; i++) {

    if (list[i] % 2 === 0) {      //I iterated through the list to check if the number was divisible by 2
      newList.push(list[i]);        //Then I added the new item in the list that fulfils the condition to the empty list
    }
  }
  return newList
}

let x = even(list);
console.log(list);
console.log(x)
