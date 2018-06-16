$(function() {
$("#gameField").click(function(e) {

  var offset = $(this).offset();
  var relativeX = (e.pageX - offset.left);
  var relativeY = (e.pageY - offset.top);
document.getElementById("mx").innerHTML="Mouse X: " + relativeX ;
document.getElementById("my").innerHTML="Mouse Y: " + relativeY ;
});
});

var leftkeyPressed=false;
var upkeyPressed=false;
var downkeyPressed=false;
var rightkeyPressed=false;
var wkeyPressed=false;
var akeyPressed=false;
var sightkeyPressed=false;
var dightkeyPressed=false;
var mintop=80;
var minleft=130;
var maxleft=1400;;
var maxtop=493;
var insect1Xposition=0;
var insect1Yposition=0;
var insect2Xposition=0;
var insect2Yposition=0;
setInsect2Values();
setInsect1Values();
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(event) {
 if(event.keyCode == 39) {
      rightkeyPressed=true;
    	moveRight();
    }
else if(event.keyCode == 37) {
       leftkeyPressed=true;
    	 moveLeft();
    }
 else if(event.keyCode == 40) {
      downkeyPressed=true;
    	moveDown();
    }
else if(event.keyCode == 38) {
       upkeyPressed=true;
    	moveUp();
    }
else if(event.keyCode == 87) {
       wkeyPressed=true;
    	moveUpW();
    }
else if(event.keyCode == 65) {
       akeyPressed=true;
    	moveLeftW();
    }
else if(event.keyCode == 83) {
       skeyPressed=true;
    	moveDownW();
    }
else if(event.keyCode == 68) {
       dkeyPressed=true;
    	moveRightW();
    }

}

 
function keyUpHandler(event){
if(event.keyCode == 39) {
       rightkeyPressed=false;
    }
else if(event.keyCode == 37) {
         leftkeyPressed=false;
    }
else if(event.keyCode == 40) {
        downkeyPressed=false;
    }
else if(event.keyCode == 38) {
         upkeyPressed=false;
    }
    else if(event.keyCode == 87) {
       wkeyPressed=false;
    }
else if(event.keyCode == 65) {
       akeyPressed=false;
    }
else if(event.keyCode == 83) {
       skeyPressed=false;
    }
else if(event.keyCode == 68) {
       dkeyPressed=false;
    }

}


function getOffset(el) {
  el = el.getBoundingClientRect();
  return {
    left: el.left + window.scrollX,
    top: el.top + window.scrollY
  }
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


/*
When using the WASD keys the W key is used as an up arrow, A as the left arrow, S as the down arrow, and the D as the right arrow key.
*/
function blowInsect1(){
    $("#insect1").css("left",getRandomInt(minleft,maxleft)).css("top",getRandomInt(mintop,maxtop)).toggleClass("roller");   
    setInsect1Values();
    setInsect2Values();
}

function blowInsect2(){
 $("#insect2").css("left",getRandomInt(minleft,maxleft)).css("top",getRandomInt(mintop,maxtop)).toggleClass("roller"); 
    setInsect1Values();
    setInsect2Values();
}

function setInsect1Values(){
insect1Yposition=getOffset(getID("insect1")).top;
insect1Xposition=getOffset(getID("insect1")).left;
}

function setInsect2Values(){
insect2Yposition=getOffset(getID("insect2")).top;
insect2Xposition=getOffset(getID("insect2")).left;
}

function getID(el) {
return document.getElementById(el);
}

function moveLeft() {
while(insect2Xposition>minleft &&  leftkeyPressed){
$("#insect2").css("left",insect2Xposition)
if(insect1Xposition==insect2Xposition && insect1Yposition==insect2Yposition){
blowInsect1();  
break;
}
else if(insect1Xposition==insect2Xposition && !(insect1Yposition==insect2Yposition)){
 break;       
}
    insect2Xposition--;
}       
setInsect2Values();
}

function moveDown() {
while(insect2Yposition<maxtop && downkeyPressed){
$("#insect2").css("top",insect2Yposition);
if(insect1Yposition==insect2Yposition && insect1Xposition==insectXposition){
 blowInsect1(); 
 break;
}
else if(insect1Yposition==insect2Yposition && !(insect1Xposition==insect2Xposition)){
 break;       
}
    insect2Yposition++;
}       
setInsect2Values();
}


function moveUp() {
while(insect2Yposition>mintop &&  upkeyPressed){
$("#insect2").css("top",insect2Yposition)
if(insect1Xposition==insect2Xposition && insect1Yposition==insect2Yposition){
blowInsect1(); 
break;
}
else if(insect1Yposition==insect2Yposition && !(insect1Xposition==insect2Xposition)){
 break;       
}
    insect2Yposition--;
}       
setInsect2Values();
}

function moveRight() {
while(insect2Xposition<maxleft &&  rightkeyPressed){
$("#insect2").css("left",insect2Xposition)
if(insect1Xposition==insect2Xposition && insect1Yposition==insect2Yposition){
blowInsect1();  
break;
}
else if(insect1Xposition==insect2Xposition && !(insect1Yposition==insect2Yposition)){
 break;       
}
    insect2Xposition++;
}       
setInsect2Values();
}




//insect 1

function moveLeftW() {
while(insect1Xposition>minleft &&  akeyPressed){
$("#insect1").css("left",insect1Xposition)
if(insect1Xposition==insect2Xposition && insect1Yposition==insect2Yposition){
blowInsect2();  
break;
}
else if(insect1Xposition==insect2Xposition && !(insect1Yposition==insect2Yposition)){
 break;       
}
    insect1Xposition--;
}       
setInsect1Values();
}

function moveDownW() {
while(insect1Yposition<maxtop && skeyPressed){
$("#insect1").css("top",insect1Yposition);
if(insect1Yposition==insect2Yposition && insect1Xposition==insectXposition){
 blowInsect2(); 
 break;
}
else if(insect1Yposition==insect2Yposition && !(insect1Xposition==insect2Xposition)){
 break;       
}
    insect1Yposition++;
}       
setInsect1Values();
}


function moveUpW() {
while(insect1Yposition>mintop &&  wkeyPressed){
$("#insect1").css("top",insect1Yposition)
if(insect1Xposition==insect2Xposition && insect1Yposition==insect2Yposition){
blowInsect2(); 
break;
}
else if(insect1Yposition==insect2Yposition && !(insect1Xposition==insect2Xposition)){
 break;       
}
    insect1Yposition--;
}       
setInsect1Values();
}

function moveRightW() {
while(insect1Xposition<maxleft &&  dkeyPressed){
$("#insect1").css("left",insect1Xposition)
if(insect1Xposition==insect2Xposition && insect1Yposition==insect2Yposition){
blowInsect2();  
break;
}
else if(insect1Xposition==insect2Xposition && !(insect1Yposition==insect2Yposition)){
 break;       
}
    insect1Xposition++;
}       
setInsect1Values();
}



