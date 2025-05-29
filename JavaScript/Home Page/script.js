function toggleMenu() {
    const mobileMenu = document.getElementById("mobileMenu");
    const header = document.querySelector('.header');
    const isOpen = mobileMenu.style.display === "flex";
    mobileMenu.style.display = isOpen ? "none" : "flex";
    
    if (!isOpen) {
        header.classList.add('scrolled');
    } else if (window.scrollY <= 50) {
        header.classList.remove('scrolled');
    }
}

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

