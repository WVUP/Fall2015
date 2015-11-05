document.getElementById("timedate").innerHTML 
(new Date()).toString().split(' ').splice(0,4)
.join(' ');
