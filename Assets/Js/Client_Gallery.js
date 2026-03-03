function initClientGallery() {
    const contenedor = document.getElementById("clients-gallery");
    if (!contenedor) return;

    const basePath = "Assets/image/ClientsUs/";

    CLIENT_IMAGES.forEach(imgData => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("client-wrapper");

        const img = document.createElement("img");
        img.src = basePath + imgData.src;
        img.alt = imgData.alt;
        img.title = imgData.title;
        img.classList.add("client-img");

        // abrir visor con alt y title
        img.addEventListener("click", () => {
            openViewer(img.src, img.alt, img.title);
        });

        wrapper.appendChild(img);
        contenedor.appendChild(wrapper);
    });
}