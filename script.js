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
const style=document.createElement("style");

style.innerHTML=`
@keyframes balloonMove{

0%{
transform:translateY(0) rotate(0deg);
opacity:0;
}

10%{
opacity:1;
}

100%{
transform:translateY(-140vh) rotate(20deg);
opacity:0;
}

}

@keyframes pulseGlow{

0%{
filter:drop-shadow(0 0 0px #ff4d6d);
}

50%{
filter:drop-shadow(0 0 20px #ff4d6d);
}

100%{
filter:drop-shadow(0 0 0px #ff4d6d);
}

}
`;

document.head.appendChild(style);

document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.animation="pulseGlow .8s infinite";

});

btn.addEventListener("mouseleave",()=>{

btn.style.animation="";

});

});

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.transition="transform 6s linear, opacity 6s linear";

heart.style.zIndex="999";

document.body.appendChild(heart);

setTimeout(()=>{

heart.style.transform=`translateY(-120vh) rotate(${Math.random()*360}deg)`;

heart.style.opacity="0";

},50);

setTimeout(()=>{

heart.remove();

},6100);

},500);

console.log("Special Website Loaded Successfully ❤️");
const photos = [
"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b",
"https://images.unsplash.com/photo-1522673607200-164d1b6ce486",
"https://images.unsplash.com/photo-1518199266791-5375a83190b",
"https://images.unsplash.com/photo-1517841905240-472988babdf9",
"https://images.unsplash.com/photo-1511285560929-80b456fea0bc",
"https://images.unsplash.com/photo-1511988617509-a57c8a288659"
];

const photoBoxes=document.querySelectorAll(".photo");

photoBoxes.forEach((box,index)=>{

const img=document.createElement("img");

img.src=photos[index%photos.length]+"?auto=format&fit=crop&w=800&q=80";

img.loading="lazy";

box.appendChild(img);

});

const letter=document.querySelector(".letter p");

if(letter){

const message=`Today is all about celebrating YOU ❤️

May your smile always stay bright.

May every dream become reality.

Thank you for being such an amazing person.

Happy Birthday 🎂

Stay Happy...
Stay Blessed...
Stay Forever Awesome ❤️`;

letter.innerHTML="";

let i=0;

function typingLetter(){

if(i<message.length){

letter.innerHTML+=message.charAt(i);

i++;

setTimeout(typingLetter,35);

}

}

setTimeout(typingLetter,1200);

}

document.addEventListener("DOMContentLoaded",()=>{

document.body.classList.add("fadeIn");

});

window.addEventListener("load",()=>{

console.log("Gallery Loaded Successfully ❤️");

});
