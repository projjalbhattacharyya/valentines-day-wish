requireProgress("valentine");


// slideshow
const images=[
"../assets/images/1.png",
"../assets/images/2.png",
"../assets/images/3.png",
"../assets/images/4.png",
];

let i=0;
const slide=document.getElementById("slide");

setInterval(()=>{
    i=(i+1)%images.length;
    slide.src=images[i];
},2500);



// fireworks
setInterval(()=>{

    for(let j=0;j<20;j++){

        const dot=document.createElement("div");
        dot.className="fire";

        dot.style.left=Math.random()*100+"vw";
        dot.style.top=Math.random()*100+"vh";
        dot.style.background=`hsl(${Math.random()*360},100%,60%)`;

        dot.style.setProperty("--x",(Math.random()*200-100)+"px");
        dot.style.setProperty("--y",(Math.random()*200-100)+"px");

        document.body.appendChild(dot);

        setTimeout(()=>dot.remove(),1000);
    }

},1200);



// music button
const music=document.getElementById("music");
const btn=document.getElementById("musicBtn");

let playing=false;

btn.onclick=()=>{

    if(!playing){
        music.play();
        btn.textContent="Pause ❤️";
        playing=true;
    }
    else{
        music.pause();
        btn.textContent="Play Song 🎵";
        playing=false;
    }

};