//navigation.js
function requireProgress(stage){
    const progress = localStorage.getItem("progress");
    if(progress !== stage){
        window.location.href = "../index.html";
    }
}