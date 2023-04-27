AOS.init();
const scrollTop = document.querySelector(".scroll-top")
window.onscroll = ()=>{
    if(window.scrollY>150){
        scrollTop.className = 'scroll-top'
    }else{
        scrollTop.className = 'scroll-top d-none'
    }
}
scrollTop.addEventListener("click", ()=>{
    window.scrollTo({
        left:0,
        top:0,
        behavior: "smooth"
    })
})
const headerNav = document.querySelector("header nav");
const menuBtn = document.querySelector(".header-menu");
menuBtn.addEventListener("click", function() {
    if (this.children[0].checked) {
        headerNav.classList.add("active");
    } else {
        headerNav.className = "";
    }
})
window.onscroll = function() {
    if (headerNav.classList.contains("active")) {
        headerNav.classList.remove("active");
        menuBtn.children[0].checked = false
    }
};
window.onload = ()=>{
    const loaderCont = document.querySelector(".loader-container");
    loaderCont.classList.remove('active')
}