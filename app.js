// wait for the DOM to finish loading
window.addEventListener("load",function() {
 // all your code should go in here.
 var clicker = 1;
 var value;
 

function pickXorO(value) {
	  if (clicker === 1) {
          	value.innerHTML="X";
          	value.style.backgroundColor = "#F0F8FF";
          	clicker = -1;

 
      } else if(clicker === -1) {
          	value.innerHTML="O";
          	value.style.backgroundColor = "#FFFACD";
            clicker = 1;
     }
         

}
 
 var box0 = document.querySelector("#box0");
 box0.addEventListener("click", function(event){
    
 pickXorO(box0);
   
})

 var box1 = document.querySelector("#box1");
 box1.addEventListener("click", function(event){
  pickXorO(box1);
   
})

 var box2 = document.querySelector("#box2");
 box2.addEventListener("click", function(event){
  pickXorO(box2);
   
})

 var box3 = document.querySelector("#box3");
 box3.addEventListener("click", function(event){
  pickXorO(box3);
   
})

 var box4 = document.querySelector("#box4");
 box4.addEventListener("click", function(event){
   pickXorO(box4);
})

 var box5 = document.querySelector("#box5");
 box5.addEventListener("click", function(event){
   pickXorO(box5);
   
})

 var box6 = document.querySelector("#box6");
 box6.addEventListener("click", function(event){
    pickXorO(box6);
})

 var box7 = document.querySelector("#box7");
 box7.addEventListener("click", function(event){
       pickXorO(box7);
   
})

  var box8 = document.querySelector("#box8");
 box8.addEventListener("click", function(event){
     pickXorO(box8);
})

 var boxNumber;
 var reset = document.querySelector("#reset");
 reset.addEventListener("click", function(event){
     for (i = 0; i < 9; i++) {
     	boxNumber = document.querySelector("#box" + i);
     	
        boxNumber.innerHTML = String.fromCharCode(8)
        boxNumber.style.backgroundColor = "white";
     }
      })
 

}); 




//window.addEventListener(function () {
	//var box1 = document.querySelector("#box1");
	//box1.addEventListener("click"), function(event) {
      //box1.innerHTML="X";
      //box1.style.backgroundColor = "blue";

	//}) -->
  // all your code should go in here.


//});



//});
