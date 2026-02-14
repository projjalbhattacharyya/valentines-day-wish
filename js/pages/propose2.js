requireProgress("propose");

const yes = document.getElementById("yesBtn");
const no = document.getElementById("noBtn");
const result = document.getElementById("result");


// floating hearts background
setInterval(()=>{
    const heart = document.createElement("div");
    heart.innerHTML="💖";
    heart.className="heart";

    heart.style.left=Math.random()*100+"vw";
    heart.style.animationDuration=(Math.random()*3+3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>heart.remove(),6000);
},400);



// move + remove NO button
function moveNo(){

    no.style.position="absolute";

    const maxX = window.innerWidth - 120;
    const maxY = window.innerHeight - 200;

    no.style.left = Math.random()*maxX + "px";
    no.style.top  = Math.random()*maxY + "px";

    no.style.transform = `scale(${Math.random()*0.4 + 0.6})`;

    // remove after first click
    setTimeout(()=>{
        no.remove();
    },400);
}


// trigger once
no.addEventListener("click", moveNo, { once:true });
no.addEventListener("touchstart", moveNo, { once:true });



// YES clicked
yes.onclick = ()=>{

    result.classList.remove("hidden");

    localStorage.setItem("progress","chocolate");

    setTimeout(()=>{
        window.location.href="chocolate3.html";
    },2000);
};