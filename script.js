document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    console.log('Menu button found:', mobileMenuToggle);
    console.log('Nav links found:', navLinks);
    
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Menu clicked!');
            navLinks.classList.toggle('active');
            console.log('Active class toggled:', navLinks.classList.contains('active'));
        });
        
        // Close menu when clicking a nav link
        document.addEventListener('click', function(e) {
            if (e.target.matches('.nav-links a')) {
                navLinks.classList.remove('active');
            }
        });
    }
    
    // Smooth scrolling for anchor links
    document.addEventListener('click', function(e) {
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            const targetId = e.target.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});