requireProgress("hug");

const btn = document.getElementById("hugBtn");
const bar = document.getElementById("progressBar");
const msg = document.getElementById("msg");
const cont = document.getElementById("continueBtn");

let progress = 0;
let interval;


// start holding
function startHug(){
    interval = setInterval(()=>{
        progress += 2;
        bar.style.width = progress + "%";

        if(progress >= 100){
            clearInterval(interval);
            finishHug();
        }
    },50);
}


// stop holding
function stopHug(){
    clearInterval(interval);
}


// finish
function finishHug(){

    const scene = document.getElementById("hugScene");
    scene.classList.remove("hidden");

    // move characters together
    setTimeout(()=>{
        scene.classList.add("hugMove");
    },200);

    // start hugging pulse
    setTimeout(()=>{
        scene.classList.add("hugPulse");
    },1200);


    // heart explosion
    for(let i=0;i<25;i++){
        const h = document.createElement("div");
        h.innerHTML="💖";
        h.className="heart";

        h.style.left="50%";
        h.style.top="50%";

        h.style.setProperty("--x",(Math.random()*400-200)+"px");
        h.style.setProperty("--y",(Math.random()*400-200)+"px");

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),1500);
    }

    msg.classList.remove("hidden");
    cont.classList.remove("hidden");

    localStorage.setItem("progress","kiss");
}


// events (mobile + desktop)
btn.addEventListener("mousedown", startHug);
btn.addEventListener("touchstart", startHug);

btn.addEventListener("mouseup", stopHug);
btn.addEventListener("mouseleave", stopHug);
btn.addEventListener("touchend", stopHug);


// continue
cont.onclick=()=>{
    window.location.href="kiss7.html";
};