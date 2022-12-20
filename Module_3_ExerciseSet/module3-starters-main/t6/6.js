

const call = document.querySelector("button");
call.addEventListener("click", function(evt) {
  alert( evt.currentTarget.tagName + " " +"clicked");

});