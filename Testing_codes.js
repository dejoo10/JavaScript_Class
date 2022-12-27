
   function getAssigned(max) {
     return Math.floor(Math.random() * max);
}

       result = getAssigned(4);

   document.getElementById("target").innerText = "hi" + result;