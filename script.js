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
