// Menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.menu-button');
    const navMenu = document.querySelector('.nav-menu');
    const overlay = document.querySelector('.overlay');
    
    if (menuButton && navMenu && overlay) {
        menuButton.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            overlay.classList.toggle('active');
        });
        
        overlay.addEventListener('click', () => {
            navMenu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
}); 