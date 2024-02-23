let title = document.querySelector(".title");
let leaf1 = document.querySelector(".leaf1");
let leaf2 = document.querySelector(".leaf2");
let bush2 = document.querySelector(".bush2");
let mount2 = document.querySelector(".mount2");
let mount1 = document.querySelector(".mount1");

window.addEventListener("scroll", function(){
    let value = window.scrollY;

    title.style.marginTop = value * 1.2+"px";

    leaf1.style.marginLeft = -value + "px";
    leaf2.style.marginLeft =  value + "px";

    bush2.style.marginBottom = -value + "px";

    mount1.style.marginBottom = -value * 1.3 + "px";
    mount2.style.marginBottom = -value * 1.1 + "px";
})