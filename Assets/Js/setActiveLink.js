function setActiveLink(elemento) {
    const lisnks = document.querySelectorAll('nav a');
    lisnks.forEach(link => {
        link.classList.remove('active');
    });
    elemento.classList.add('active');
}