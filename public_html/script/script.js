var order=0;
var s;
var f;
var a;
var r;
var txt;
var can;
var move=0;
var movex=0;
var movey=350;
var interval=0;
var movez=0;
function msg() {
    alert("Work in progress");
}

function startup() {
    s = document.getElementById("x");
    f = document.getElementById("y");
    a = document.getElementById("z");
    r = document.getElementById("q");
   
 
}
function describe() {
    s.innerHTML = "The Exorcist is a 1971 horror novel by American writer William \n\
Peter Blatty. The book details the demonic possession of eleven-year-old Regan MacNeil, the daughter of a \n\
famous actress, and the two priests who attempt to exorcise the demon.";


}
function describe2() {
    f.innerHTML = "PS, I Love You is Irish writer Cecelia Ahern's debut novel, published in 2004. \n\
It not only claimed the number one best-seller status in Ireland, Britain, the United States, \n\
Germany, and the Netherlands but was on the number one spot in Ireland for nineteen weeks.";
}
function describe3() {
    a.innerHTML = "Take JAVA to the max with expert help Beginning, intermediate, and advanced JAVA \n\
programmers alike take note: everything you need to get the best performance out of your applets \n\
and servlets is packed into JAVA 2.0: The Complete Reference. World- renowned authors, \n\
Patrick Naughton (ESPN's Sportszone, Disney, and ABC News Web sites), Herb Schildt, the world's \n\
leading programming author, and Joseph OAENeil add 30% more material to their hugely successful \n\
past editions of this best seller.";
}
function describe4() {
    r.innerHTML = "Dracula is an 1897 Gothic horror novel by Irish author Bram Stoker. It introduced the \n\
character of Count Dracula and established many conventions of subsequent vampire fantasy.[1] The novel \n\
tells the story of Dracula's attempt to move from Transylvania to England so that he may find new blood and \n\
spread the undead curse, and of the battle between Dracula and a small group of men and a woman led by Professor Abraham Van Helsing.";


}
function reset() {
    s.innerHTML = "The Exorcist by William Peter Blatty";
}
function reset2() {
    f.innerHTML = "P.S I Love You by Cecelia Ahern";
}
function reset3() {
    a.innerHTML = "Java 2: The Complete Reference, Fifth Edition By Patrick Naughton and Herbert Schildt";
}
function reset4() {
    r.innerHTML = "Dracula By Bram Stoker ";
}
function orderMovie() {
    
  var c=confirm("Would you like to purchase the product ?");
  if(c===true){
      var ord=prompt("Please enter number of items that you want to purchase: ");
      order=order+parseInt(ord); 
      var zord=confirm("Do you want any change in the order that you have selected ?");
      if(zord===true){
          alert("Please click on the image of product that you wish to purchase:");
          order=0;
      }
      else{
          alert("Your purchase is confirmed");
      }
     }
   
       else{
      txt="You Pressed cancel";
      alert(txt);
  }
    process();
    
}
function process(){
    
    var j=document.getElementById("bookorder");
    j.innerHTML="Your desired order is: "+order;
    
    
}
function startcanvas(){
     can=document.getElementById("mycanvas");
    ctx=can.getContext("2d");
}
function writename(){
   clearcanvas();
   ctx.font="15px Georgia";
   ctx.fillStyle="red";
   move+=10;
  ctx.fillText("Simranjeet Singh",0,move,200);
  if(move>200){
    move=0;
}
     
    
}

function clearcanvas(){
    ctx.clearRect(0,0,500,500);
   // clearInterval(interval);
    
}
function drawrectangle(){
     ctx.fillStyle="red";
    ctx.fillRect(249,99,50,50);
}
function drawsquare(){
    clearcanvas();
    ctx.fillStyle="crimson";
    ctx.fillRect(movex,0,50,50);
    movex+=10;
    if(movex>350){
        movex=0;
    }
    
 ctx.fillRect(movey,100,50,50);
   
 movey+=-10;
 
    if(movey<-50){
        movey=250;
    }


}

function timedsquare(){
    interval=setInterval(drawsquare,200);
    
}


function initials(){
  
  movez=movez+10;  
    ctx.beginPath();
    ctx.arc(15,20,5,Math.PI*2,false);
    ctx.strokeStyle="red";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(35,20,5,Math.PI*2,false);
    ctx.stroke();
    
     ctx.beginPath();
    ctx.arc(55,20,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(75,20,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(15,40,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(15,60,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(35,60,5,Math.PI*2,false);
    ctx.stroke();
    
   ctx.beginPath();
    ctx.arc(55,60,5,Math.PI*2,false);
    ctx.stroke(); 
  
  ctx.beginPath();
    ctx.arc(75,60,5,Math.PI*2,false);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.arc(75,80,5,Math.PI*2,false);
    ctx.stroke();
    
     ctx.beginPath();
    ctx.arc(75,100,5,Math.PI*2,false);
    ctx.stroke();
    
     ctx.beginPath();
    ctx.arc(55,100,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(35,100,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(15,100,5,Math.PI*2,false);
    ctx.stroke();
    
    
    
    //First initial finishes here
    
//    Second initial starts here
  if(movez>15){  
    ctx.beginPath();
    ctx.moveTo(95,20);
    ctx.lineTo(200,20);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(147.5,20);
    ctx.lineTo(147.5,100);
    ctx.strokeStyle="orange";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(110,100);
    ctx.lineTo(147.5,100);
    ctx.strokeStyle="brown";

    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(110,70);
        ctx.strokeStyle="gold";

    ctx.lineTo(110,100);
    ctx.stroke();
  }
    
//    second initial ends here

//third initial starts from here
if(movez>25){
   ctx.beginPath();
    ctx.arc(225,20,5,Math.PI*2,false);
    ctx.strokeStyle="red";
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(245,20,5,Math.PI*2,false);
    ctx.stroke();
    
     ctx.beginPath();
    ctx.arc(265,20,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(285,20,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(225,40,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(225,60,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(245,60,5,Math.PI*2,false);
    ctx.stroke();
    
   ctx.beginPath();
    ctx.arc(265,60,5,Math.PI*2,false);
    ctx.stroke(); 
  
  ctx.beginPath();
    ctx.arc(285,60,5,Math.PI*2,false);
    ctx.stroke();
    
    
    ctx.beginPath();
    ctx.arc(285,80,5,Math.PI*2,false);
    ctx.stroke();
    
     ctx.beginPath();
    ctx.arc(285,100,5,Math.PI*2,false);
    ctx.stroke();
    
     ctx.beginPath();
    ctx.arc(265,100,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(245,100,5,Math.PI*2,false);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(225,100,5,Math.PI*2,false);
    ctx.stroke();
   
}

}

function setinterval(){
    
    interval=setInterval(initials,3000);
   
    
}