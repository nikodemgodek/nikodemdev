var lastScrollTop = 0;
var navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  if(scrollTop > lastScrollTop) {
    navbar.style.top = "-80px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;

})

console.log("dupa");