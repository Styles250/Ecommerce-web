const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

let closelock=document.getElementById('closelock');
let openlock=document.getElementById('openlock');

        closelock.onclick =()=>{
            closelock.style.display='none';
            openlock.style.display='inherit';
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
        }
        openlock.onclick=()=>{
            closelock.style.display='inherit';
            openlock.style.display='none';
            const type = password.getAttribute("type") === "password" ? "text" : "password";
            password.setAttribute("type", type);
        }


var getPassword=document.getElementById('getPassword');
var passInput=document.getElementById('passwordINPUT');
var lockPassword=document.getElementById('lockPassword');

getPassword.addEventListener("click",()=>{
    // alert('hhh')
    // var x=passInput.type;
    // alert(x)
    if(passInput.type ="password"){
       passInput.type ="text";
       getPassword.style.display='none';
       lockPassword.style.display='inherit';
    }
});

lockPassword.addEventListener("click",()=>{
    if(passInput.type ="text"){
        passInput.type ="password";
        getPassword.style.display='inherit';
        lockPassword.style.display='none';
     }
})



