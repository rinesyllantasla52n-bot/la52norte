function initMobileMenu() {

    const toggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("#header nav");

    if (!toggle || !nav) return;

    /* cerrar siempre al cargar en movil */
    if (window.innerWidth <= 480) {
        nav.classList.remove("open");
    }

    toggle.addEventListener("click", () => {
        nav.classList.toggle("open");
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
        });
    });

    /* si cambia tamaño de pantalla */
    window.addEventListener("resize", () => {
        if (window.innerWidth > 480) {
            nav.classList.remove("open");
        }
    });
}

document.addEventListener("DOMContentLoaded", initMobileMenu);