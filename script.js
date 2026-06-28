const pages = document.querySelectorAll(".page");

let currentPage = 0;

function showPage(index){

pages.forEach((page)=>{
page.classList.remove("active");
});

pages[index].classList.add("active");

currentPage=index;

}

document.getElementById("giftBtn").onclick=function(){

showPage(1);

playMusic();

}

document.getElementById("nextBtn").onclick=function(){

showPage(2);

}

document.getElementById("lightBtn").onclick=function(){

document.body.classList.add("lightsOn");

showPage(3);

}

document.getElementById("messageBtn").onclick=function(){

showPage(4);

}

document.getElementById("openCurtain").onclick=function(){

document.querySelector(".left").classList.add("open");

document.querySelector(".right").classList.add("open");

setTimeout(()=>{

showPage(5);

},2200);

}

document.getElementById("galleryBtn").onclick=function(){

showPage(6);

}

showPage(0);
const music=document.getElementById("bgMusic");

function playMusic(){

if(music){

music.play().catch(()=>{});

}

}

document.addEventListener("click",()=>{

playMusic();

},{once:true});

document.addEventListener("keydown",(e)=>{

if(e.key==="ArrowRight"){

if(currentPage<pages.length-1){

showPage(currentPage+1);

}

}

if(e.key==="ArrowLeft"){

if(currentPage>0){

showPage(currentPage-1);

}

}

});

const title=document.getElementById("mainTitle");

if(title){

let scale=1;

setInterval(()=>{

scale=scale===1?1.03:1;

title.style.transform=`scale(${scale})`;

},1000);

}

const balloons=document.querySelector(".balloons");

if(balloons){

for(let i=0;i<20;i++){

const b=document.createElement("div");

b.innerHTML="🎈";

b.style.position="absolute";

b.style.left=Math.random()*100+"%";

b.style.bottom="-100px";

b.style.fontSize=(30+Math.random()*30)+"px";

b.style.animation=`balloonMove ${8+Math.random()*8}s linear infinite`;

b.style.animationDelay=Math.random()*8+"s";

balloons.appendChild(b);

}

}
