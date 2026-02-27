function cargar(pagina) {
    fetch(pagina)
        .then(res => {
            if (!res.ok) throw new Error();
            return res.text();
        })
        .then(html => {

            const container = document.getElementById('container');
            container.innerHTML = html;

            // 🔥 ejecutar después de pintar el HTML
            setTimeout(() => {
                if (typeof initProductGallery === "function" &&
                    document.getElementById("products-gallery")) {

                    initProductGallery();

                }
                if (typeof initClientGallery === "function" &&
                    document.getElementById("clients-gallery")) {
                    initClientGallery();
                }
                if (typeof initServices === "function" &&
                    document.getElementById("services-container")) {
                    initServices();
                }

            }, 0);

        })
        .catch(() => cargar('pages/NotFound.html'));
}

cargar('pages/Services.html');
