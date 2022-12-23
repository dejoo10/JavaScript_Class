'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const get = document.getElementById("target");

for (let i = 0; i<students.length; i++) {
  let nameT =students[i].name;
  let valueT = students[i].id;

  var option = document.createElement('option');
  option.text=nameT;
  option.value=valueT;
  get.appendChild(option);

}
