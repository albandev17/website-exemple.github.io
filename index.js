const btnMenu = document.getElementById("hamburger");
const navLinks = document.getElementById("menu-mobile");

btnMenu.addEventListener('click', () => {
     navLinks.classList.toggle('active');
});

