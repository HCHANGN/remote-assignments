const banner=document.querySelector(".banner");
const navIcon=document.querySelector(".navIcon");
const closeIcon=document.querySelector(".closeIcon");
const navMenu=navIcon.nextElementSibling;
const footer=document.querySelector(".footer");

banner.addEventListener("click",()=>{
	banner.firstElementChild.textContent="Have a Good Time!";
});

navIcon.addEventListener("click",()=>{
	console.log("you click the icon!");
	navMenu.className="navMenu";
});

closeIcon.addEventListener("click",()=>{
	navMenu.className="";
});

footer.addEventListener("click",()=>{
	footer.nextElementSibling.className="container";
})
