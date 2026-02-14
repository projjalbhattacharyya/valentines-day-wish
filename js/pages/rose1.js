requireProgress("rose");

const rose = document.getElementById("rose");
const btn = document.getElementById("continueBtn");

rose.onclick = () => {

    // petals animation
    for(let i=0;i<25;i++){
        const petal = document.createElement("div");
        petal.innerHTML="🌸";
        petal.className="petal";

        petal.style.left = Math.random()*100 + "vw";
        petal.style.animationDuration = (Math.random()*3+2)+"s";

        document.body.appendChild(petal);

        setTimeout(()=>petal.remove(),5000);
    }

    // unlock next page
    localStorage.setItem("progress","propose");

    // show continue button
    btn.classList.remove("hidden");

    document.getElementById("afterMessage").classList.remove("hidden");
};

// continue click
btn.onclick = ()=>{
    window.location.href="propose2.html";
};