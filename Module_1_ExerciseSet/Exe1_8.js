
startYear = parseInt(prompt("Enter the starting year: "))  //user can enter the starting year//
endYear = parseInt(prompt("Enter the ending year: "))  //user can enter the ending yer//
let n = 0;

list_year = []    //all the years in the range are stored in this list according to the for loop below//
for (let i=startYear; i<=endYear; i++) {
  list_year.push(i)
}
reList = [] //all leap years are stored in this list according to the for loop below//
for (let j = 0; j<=list_year.length; j++) {
  let checkEach = list_year[j];
  leapyear(checkEach)

  //The following function will check of each year in the range is a leap year//

  function leapyear(year) {

    if (year % 100 === 0) {
      if ((year % 400 === 0)) {
        n = 0
      }
    } else if (year % 4 === 0) {
      n = 0
    } else {
      n = 1

    }

  if (n === 0) {
    reList.push(year)
  } else if (n === 1) {
    //document.getElementById("target").innerText = year +  "! is not a leap year";//
  }
}
}

//This will append the result in html as ul
cardPrint = document.getElementById("target")

for (let k = 0; k<reList.length; k++) {
  li = document.createElement("li")
  li.innerText=reList[k]
  cardPrint.appendChild(li)
}


