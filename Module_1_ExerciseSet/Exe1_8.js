

var st_year = parseInt(prompt("Enter start year"));
var end_year = parseInt(prompt("Enter end year"));

function leap_year_range(st_year, end_year) {
  let year_range = [];
  for (let i = st_year; i <= end_year; i++)
  {
    year_range.push(i);
  }
  var new_array = [];

  year_range.forEach(
      function(year)
      {
        if(test_LeapYear(year))
          new_array.push(year);
      }

  );

  return new_array;
}

function test_LeapYear(year) {
  if ((Year % 4 ===0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 ===0)) {
    return year;
  } else {
    return false;
  }
}

document.getElementById("Leap").innerText="Leap years, " + leap_year_range(st_year, end_year);
