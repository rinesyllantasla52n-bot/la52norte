// Crear visor si no existe (IMPORTANTE PARA SPA)
function ensureViewerExists() {
    if (document.getElementById("image-viewer")) return;

    const viewer = document.createElement("div");
    viewer.id = "image-viewer";
    viewer.className = "viewer hidden";
    viewer.setAttribute("role", "dialog");       // ✅ accesibilidad
    viewer.setAttribute("aria-modal", "true");

    viewer.innerHTML = `
        <span id="viewer-close" aria-label="Cerrar visor">&times;</span>
        <img id="viewer-img" src="" alt="">
    `;

    document.body.appendChild(viewer);
}

// src: URL de la imagen
// altText: descripción de la imagen para SEO/ACCESIBILIDAD
function openViewer(src, altText = "", titleText = "") {
    ensureViewerExists();

    const viewer = document.getElementById("image-viewer");
    const viewerImg = document.getElementById("viewer-img");

    viewerImg.src = src;
    viewerImg.alt = altText;       // ✅ alt dinámico
    viewerImg.title = titleText;   // ✅ title dinámico
    viewer.classList.remove("hidden");
}

function closeViewer() {
    const viewer = document.getElementById("image-viewer");
    if (viewer) viewer.classList.add("hidden");
}

// cerrar con X o fondo
document.addEventListener("click", e => {
    if (e.target.id === "viewer-close") closeViewer();
    if (e.target.id === "image-viewer") closeViewer();
});

// ESC
document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeViewer();
});