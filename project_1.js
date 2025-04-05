const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", ()=> {
    links.classList.toggle("show-links");
    links.classList.toggle("nav-links");
});
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link)=>{
  link.addEventListener("click", (e)=> {
  e.preventDefault();
  links.classList.remove("show-links");
  const id=e.target.getAttribute("href").slice (1);
  const element = document.getElementById(id);
  links.classList.toggle("nav-links");
  window.scrollTo ({
    left: 0,
    top: element.offsetTop,
    behavior: "smooth",
    });
  });
});

window.addEventListener("resize", ()=>{
  if (window.innerWidth >768){
    links.classList.remove("show-links");
    if (!links.classList.contains ("nav-links")) {
      links.classList.toggle("nav-links");
    }
  }
});

