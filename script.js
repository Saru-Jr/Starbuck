function order() {
    window.location.href = 'book/index.html';
}
function delivery() {
    window.location.href = 'location/index.html';
}

const menu = document.querySelector(".menu")
        const navLinks = document.querySelector(".nav-links")
 
        menu.addEventListener('click',()=>{
        navLinks.classList.toggle('mobile-menu')
        })
