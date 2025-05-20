document.addEventListener('DOMContentLoaded', () => {
    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fade-in Animation
    const fadeInElements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    fadeInElements.forEach(element => observer.observe(element));

    // Project Card Hover Effect
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const techTags = card.querySelector('.project-tech');
            techTags.style.opacity = '1';
            techTags.style.transform = 'translateY(0)';
        });
        card.addEventListener('mouseleave', () => {
            const techTags = card.querySelector('.project-tech');
            techTags.style.opacity = '0.7';
            techTags.style.transform = 'translateY(5px)';
        });
    });
});