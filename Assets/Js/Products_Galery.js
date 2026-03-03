function initProductGallery() {
    const contenedor = document.getElementById("products-gallery");
    if (!contenedor) return;

    const basePath = "Assets/image/Products/";

    PRODUCT_IMAGES.forEach(imgData => {
        const img = document.createElement("img");

        img.src = basePath + imgData.src;
        img.alt = imgData.alt;       // ✅ alt dinámico
        img.title = imgData.title;   // ✅ title dinámico
        img.classList.add("product-img");

        // 👇 ABRIR VISOR con alt y title
        img.addEventListener("click", () => {
            openViewer(img.src, img.alt, img.title);
        });

        contenedor.appendChild(img);
    });
}