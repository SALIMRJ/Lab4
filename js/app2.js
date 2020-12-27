var Name = document.getElementById('Fname');
var Age =document.getElementById('Age'); 
var N = document.getElementById('N');
var agg =document.getElementById('agg');
var Color = document.getElementById('color');


Age.addEventListener('change',function (){
var ag = Age.value ;
if(ag>2020){alert('invalid');
return;
}
});


submit.addEventListener('click' ,function(){

if(Name!==null&&Age!==null){
N.innerHTML='Mr.'+Name.value;
var x = 2020-Age.value;
if(x>=18){agg.innerHTML='Adult';}
else{

    if (x>12&&x<18) {agg.innerHTML='Teenager';}

 else {agg.innerHTML='Child'}

}
}


});

/*submitColor.addEventListener('click',function(){
document.body.style.background.color=Color.value;


});
*/