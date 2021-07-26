console.log("page loaded...");
var a = document.getElementsByClassName("placholder");
function over(a){
a.play();
a.muted =  true;
}
function out(a){
a.pause()
a.muted = false;
}