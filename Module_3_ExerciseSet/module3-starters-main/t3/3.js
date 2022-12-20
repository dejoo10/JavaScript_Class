'use strict';
const names = ['John', 'Paul', 'Jones'];

var user = document.querySelector("#target");

for (let i=0; i<names.length; i++) {
  var li = document.createElement("li");
  li.innerHTML=names[i];
  user.appendChild(li);
}

