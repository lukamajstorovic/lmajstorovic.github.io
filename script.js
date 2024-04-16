document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger');
    const navBar = document.querySelector('.navigation-bar');

    hamburgerBtn.addEventListener('click', function() {
        navBar.classList.toggle('active');
    });
});
