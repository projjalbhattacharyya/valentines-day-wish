requireProgress("kiss");

const btn = document.getElementById("kissBtn");
const kiss = document.getElementById("kissScene");
const msg = document.getElementById("msg");
const cont = document.getElementById("continueBtn");

btn.onclick = ()=>{

    kiss.classList.remove("hidden");

    // floating hearts
    for(let i=0;i<25;i++){
        const h=document.createElement("div");
        h.innerHTML="💞";
        h.className="heart";

        h.style.left=Math.random()*100+"vw";
        h.style.animationDuration=(Math.random()*3+2)+"s";

        document.body.appendChild(h);

        setTimeout(()=>h.remove(),5000);
    }

    // sparkles
    for(let i=0;i<30;i++){
        const s=document.createElement("div");
        s.innerHTML="✨";
        s.className="sparkle";

        s.style.left=Math.random()*100+"vw";
        s.style.top=Math.random()*100+"vh";

        document.body.appendChild(s);

        setTimeout(()=>s.remove(),1200);
    }

    msg.classList.remove("hidden");
    cont.classList.remove("hidden");

    localStorage.setItem("progress","valentine");
};

cont.onclick=()=>{
    window.location.href="valentines.html";
};