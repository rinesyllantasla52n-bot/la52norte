function initProductGallery() {
    const contenedor = document.getElementById("products-gallery");
    if (!contenedor) return;

    const basePath = "Assets/image/Products/";

    PRODUCT_IMAGES.forEach(imgName => {

        const img = document.createElement("img");

        img.src = basePath + imgName;
        img.classList.add("product-img");

        // 👇 ABRIR VISOR
        img.addEventListener("click", () => {
            openViewer(img.src);
        });

        contenedor.appendChild(img);
    });
}