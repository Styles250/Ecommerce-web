const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}




// to give like to prodduct

var like=document.getElementById('like');
var liked=document.getElementById('clicked');
var like2=document.getElementById('like2');
var liked2=document.getElementById('clicked2');
var like3=document.getElementById('like3');
var liked3=document.getElementById('clicked3');
var like4=document.getElementById('like4');
var liked4=document.getElementById('clicked4');
var like5=document.getElementById('like5');
var liked5=document.getElementById('clicked5');
var like6=document.getElementById('like6');
var liked6=document.getElementById('clicked6');
var like7=document.getElementById('like7');
var liked7=document.getElementById('clicked7');
var like8=document.getElementById('like8');
var liked8=document.getElementById('clicked8');


like.addEventListener("click",()=>{
    like.style.display='none';
    liked.style.display='inherit';
})
liked.addEventListener("click",()=>{
    like.style.display='block';
    liked.style.display='none';
})
like2.addEventListener("click",()=>{
    like2.style.display='none';
    liked2.style.display='inherit';
})
liked2.addEventListener("click",()=>{
    like2.style.display='block';
    liked2.style.display='none';
})
like3.addEventListener("click",()=>{
    like3.style.display='none';
    liked3.style.display='inherit';
})
liked3.addEventListener("click",()=>{
    like3.style.display='block';
    liked3.style.display='none';
})
like4.addEventListener("click",()=>{
    like4.style.display='none';
    liked4.style.display='inherit';
})
liked4.addEventListener("click",()=>{
    like4.style.display='block';
    liked4.style.display='none';
})

like5.addEventListener("click",()=>{
    like5.style.display='none';
    liked5.style.display='inherit';
})
liked5.addEventListener("click",()=>{
    like5.style.display='block';
    liked5.style.display='none';
})


like6.addEventListener("click",()=>{
    like6.style.display='none';
    liked6.style.display='inherit';
})
liked6.addEventListener("click",()=>{
    like6.style.display='block';
    liked6.style.display='none';
})

like7.addEventListener("click",()=>{
    like7.style.display='none';
    liked7.style.display='inherit';
})
liked7.addEventListener("click",()=>{
    like7.style.display='block';
    liked7.style.display='none';
})

like8.addEventListener("click",()=>{
    like8.style.display='none';
    liked8.style.display='inherit';
})
liked8.addEventListener("click",()=>{
    like8.style.display='block';
    liked8.style.display='none';
})










// for (var i = 0; i < heart.length; i++) {
//     heart[i].addEventListener("click", function() {
//     var current = document.getElementsByClassName("active");
//     current.classList.add("active");
//     // current[0].className = current[0].className.replace(" active", "");
//     // this.className += " active";
//     });
//   }

