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

    // Typing Animation for "Noro" and "Guterres"
    const typingNameElement = document.querySelector('.typing-name');
    const names = ['Noro', 'Guterres'];
    let currentNameIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;

    function type() {
        const currentName = names[currentNameIndex];
        const textToShow = currentName.substring(0, currentCharIndex);

        typingNameElement.textContent = textToShow;

        if (!isDeleting && currentCharIndex < currentName.length) {
            // Digitação: adiciona o próximo caractere
            currentCharIndex++;
            setTimeout(type, 150); // Velocidade de digitação
        } else if (isDeleting && currentCharIndex > 0) {
            // Deleção: remove o último caractere
            currentCharIndex--;
            setTimeout(type, 100); // Velocidade de deleção
        } else if (!isDeleting && currentCharIndex === currentName.length) {
            // Pausa após completar a digitação
            setTimeout(() => {
                isDeleting = true;
                type();
            }, 2000); // Pausa de 2 segundos
        } else if (isDeleting && currentCharIndex === 0) {
            // Troca para o próximo nome após deletar tudo
            isDeleting = false;
            currentNameIndex = (currentNameIndex + 1) % names.length;
            setTimeout(type, 500); // Pequena pausa antes de começar a digitar o próximo nome
        }
    }

    // Inicia a animação
    type();
});