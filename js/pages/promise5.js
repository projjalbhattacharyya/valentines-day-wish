//promise5.js
requireProgress("promise");

const form = document.getElementById("promiseForm");
const input = document.getElementById("promiseInput");
const display = document.getElementById("display");
const cont = document.getElementById("continueBtn");

form.addEventListener("submit", function(e){

    e.preventDefault(); // stop page redirect

    if(input.value.trim()===""){
        input.placeholder="You must write a promise first ❤️";
        return;
    }

    // show promise on screen
    display.textContent = "I promise: " + input.value + " 💖";
    display.classList.remove("hidden");
    display.classList.add("glow");

    cont.classList.remove("hidden");

    localStorage.setItem("progress","hug");

    // send promise silently
    fetch(form.action,{
        method:"POST",
        body:new FormData(form)
    });
});


cont.onclick = ()=>{
    window.location.href="hug6.html";
};