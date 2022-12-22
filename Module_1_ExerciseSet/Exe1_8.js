

var yearStart = parseInt(prompt("Enter start year"));
var yearEnd = parseInt(prompt("Enter end year"));

document.getElementById("Leap").innerText="Leap years, " + leapYear_range(yearStart, yearEnd);
console.log(leapYear_range(yearStart, yearEnd))

function leapYear_range(yearStart, yearEnd) {
  let year_range = [];
  for (let i = yearStart; i <= yearEnd; i++)
  {
    year_range.push(i);
  }
  let new_array = [];

  year_range.forEach(
      function(year) {
        if(LeapYears(year))
          new_array.push(year);
      }

  );
  return new_array;
}
function LeapYears(year) {
  if ((Year % 4 ===0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 ===0)) {
    return year;
  } else {
    return false;
  }
}


