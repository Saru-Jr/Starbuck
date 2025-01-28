function order() {
    window.location.href = "/siteteste/book/book.html";
}
function delivery() {
    window.location.href = "/siteteste/location/delivery.html"
}

const menu = document.querySelector(".menu")
        const navLinks = document.querySelector(".nav-links")
 
        menu.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
