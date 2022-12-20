const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

let observer = new IntersectionObserver((e) =>{
    e.forEach((box)=>{
        if(box.isIntersecting){
        box.target.style.opacity = 1;
        }
    })
})

let section = document.querySelectorAll('section')
observer.observe(section[0])
observer.observe(section[1])
observer.observe(section[2])
observer.observe(section[3])