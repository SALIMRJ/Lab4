var today= new Date();
var hourNow = today.getHours();
var greeting;
var se =document.getElementById('se');
if (hourNow > 18) {
  greeting= 'Good evening';
} else if (hourNow > 12) {
greeting = ' Good afternoon';
} else if (hourNow > 0) {
greeting = 'Good morni ng';
} else {
greeting = 'Welcome! ' ;
};

document.write( ' <h3>' +greeting + ' </ h3> ');
// var prom =prompt("your sex");
 
  
  

  var prom =prompt("Enter your sex");
console.log(prom);
   
  
while (prom ==""||prom==null) {

  var prom =prompt("Enter your sex");
};
 
