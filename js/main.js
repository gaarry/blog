// Menu toggle
const menuButton = document.querySelector('.menu-button');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

menuButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
});

overlay.addEventListener('click', () => {
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
});

// Page navigation
const navLinks = document.querySelectorAll('.nav-menu a');
const pages = document.querySelectorAll('section[id$="-page"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetPageId = link.getAttribute('data-page');
        
        // Hide all pages
        pages.forEach(page => {
            page.classList.remove('active-page');
        });
        
        // Show target page
        document.getElementById(targetPageId).classList.add('active-page');
        
        // Close menu
        navMenu.classList.remove('active');
        overlay.classList.remove('active');
        
        // Scroll to top
        window.scrollTo(0, 0);
        
        // Update URL without page reload
        history.pushState(null, null, targetPageId === 'home-page' ? '/' : `/${targetPageId.replace('-page', '')}`);
    });
});

// Handle in-page navigation
document.querySelectorAll('[data-page]').forEach(link => {
    if (!link.classList.contains('nav-menu a')) {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const targetPageId = link.getAttribute('data-page');
            
            // Hide all pages
            pages.forEach(page => {
                page.classList.remove('active-page');
            });
            
            // Show target page
            document.getElementById(targetPageId).classList.add('active-page');
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Update URL without page reload
            history.pushState(null, null, targetPageId === 'home-page' ? '/' : `/${targetPageId.replace('-page', '')}`);
        });
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
    const path = window.location.pathname;
    let targetPageId = 'home-page';
    
    if (path !== '/') {
        const pageName = path.substring(1);
        targetPageId = pageName ? `${pageName}-page` : 'home-page';
    }
    
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show target page if it exists, otherwise show home
    const targetPage = document.getElementById(targetPageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    } else {
        document.getElementById('home-page').classList.add('active-page');
    }
});

// Initialize the correct page based on URL
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    let targetPageId = 'home-page';
    
    if (path !== '/') {
        const pageName = path.substring(1);
        targetPageId = pageName ? `${pageName}-page` : 'home-page';
    }
    
    // Hide all pages
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show target page if it exists, otherwise show home
    const targetPage = document.getElementById(targetPageId);
    if (targetPage) {
        targetPage.classList.add('active-page');
    } else {
        document.getElementById('home-page').classList.add('active-page');
    }
}); 