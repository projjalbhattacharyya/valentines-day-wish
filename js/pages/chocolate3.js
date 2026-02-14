requireProgress("chocolate");

const gift = document.getElementById("gift");
const msg = document.getElementById("message");
const btn = document.getElementById("continueBtn");

gift.onclick = ()=>{

    // change gift → chocolate
    gift.innerHTML="🍫";

    // chocolate rain animation
    for(let i=0;i<25;i++){
        const c = document.createElement("div");
        c.innerHTML="🍬";
        c.className="choco";

        c.style.left=Math.random()*100+"vw";
        c.style.animationDuration=(Math.random()*3+2)+"s";

        document.body.appendChild(c);

        setTimeout(()=>c.remove(),5000);
    }

    msg.classList.remove("hidden");
    btn.classList.remove("hidden");

    localStorage.setItem("progress","teddy");
};


// continue button
btn.onclick=()=>{
    window.location.href="teddy4.html";
};