var typed=new Typed(".text",{
    strings:["frontend","web developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
let menuicon=document.querySelector("#menu-icon");
let navbar=document.querySelector(".navbar");
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}