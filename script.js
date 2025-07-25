document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    console.log('Mobile menu toggle:', mobileMenuToggle);
    console.log('Nav links:', navLinks);
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu clicked!');
            navLinks.classList.toggle('active');
            console.log('Active class toggled:', navLinks.classList.contains('active'));
        });
        
        // Close menu when clicking a link
        const menuLinks = document.querySelectorAll('.nav-links a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    } else {
        console.error('Menu elements not found!');
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});