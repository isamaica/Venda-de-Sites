// app.js

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector('form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio do formulário

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        alert(`Obrigado, ${nome}! Sua mensagem foi enviada.`);
        contactForm.reset(); // Reseta o formulário
    });

    // Animação ao carregar a página
    const animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
        }, index * 300);
    });
});

