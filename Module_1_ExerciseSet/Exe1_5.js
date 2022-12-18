
let year = parseInt(prompt("Enter the year: "));
function leapyear(year){

    if (year % 100 === 0) {
      if((year % 400 ===0)){
        document.getElementById("Year").innerText= "Year, " + year + "is leap year"
      }
    } else if (year % 4 === 0) {
      document.getElementById("Year").innerText = "Year, " + year +
          "is a leap year";
    }else{
      document.getElementById("Year").innerText= "Year, "+ year + "is not a leap year";

    }
  }
