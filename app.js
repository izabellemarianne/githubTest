const mobileMenu = document.getElementById('mobile-menu');
const navbarMenu = document.querySelector('.navbar_menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});