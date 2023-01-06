

let arr = ['james', 'John', 'Femi','Joni', 'Kings', 'Sola'];
//let arr = [9,2,3,4,5,6];

function concat() {
   let matched = "";                                    //here I initialized a new variable to an empty string

   for (let i = 0; i < arr.length; i++) {          //then I iterated through the arr list
      matched += arr[i];
   }
   return matched;

}
//console.log(concat(arr))

document.getElementById("Show").innerHTML=concat(arr); //this will show the result in the html page


