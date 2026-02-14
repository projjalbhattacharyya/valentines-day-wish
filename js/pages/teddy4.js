requireProgress("teddy");

const teddy = document.getElementById("teddy");
const msg = document.getElementById("msg");
const btn = document.getElementById("continueBtn");

teddy.onclick = ()=>{

    teddy.classList.add("hug");

    // floating hearts
    for(let i=0;i<20;i++){
        const h=document.createElement("div");
        h.innerHTML="💖";
        h.className="heart";

        h.style.left=Math.random()*100+"vw";
        h.style.animationDuration=(Math.random()*3+2)+"s";

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),5000);
    }

    msg.classList.remove("hidden");
    btn.classList.remove("hidden");

    localStorage.setItem("progress","promise");
};

btn.onclick=()=>{
    window.location.href="promise5.html";
};