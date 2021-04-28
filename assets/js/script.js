

function toggleWhy(){
    let whyAnswer= document.getElementById("why-answer");
    whyAnswer.classList.toggle("hidden");
}
document.getElementById("why-toggle-button").onclick =toggleWhy;


function toggleHow(){
    let howAnswer= document.getElementById("how-answer");
    howAnswer.classList.toggle("hidden");
}
document.getElementById("how-toggle-button").onclick =toggleHow;


function toggleWhen(){
    let whenAnswer= document.getElementById("when-answer");
    whenAnswer.classList.toggle("hidden");
}
document.getElementById("when-toggle-button").onclick =toggleWhen;

toggleWhy();
toggleHow();
toggleWhen();


function setBackgroundColor(color){
    document.body.style.backgroundColor= color;
    let header = document.getElementById("header");
    header.style.backgroundColor= color;
}

function sunButtonClicked(){
    setBackgroundColor("#FFF3B0");
}
document.getElementById("sun-img").onclick= sunButtonClicked;


function bathtubButtonClicked(){
    setBackgroundColor("#ECF8F8");
}
document.getElementById("bathtub-img").onclick= bathtubButtonClicked;


function journalButtonClicked(){
    setBackgroundColor("#F1FAEE");
}
document.getElementById("journal-img").onclick= journalButtonClicked;


function unplugButtonClicked(){
    setBackgroundColor("#FFD6A5");
}
document.getElementById("unplug-img").onclick= unplugButtonClicked;

