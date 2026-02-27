// Crear visor si no existe (IMPORTANTE PARA SPA)
function ensureViewerExists() {

    if (document.getElementById("image-viewer")) return;

    const viewer = document.createElement("div");
    viewer.id = "image-viewer";
    viewer.className = "viewer hidden";

    viewer.innerHTML = `
        <span id="viewer-close">&times;</span>
        <img id="viewer-img" src="">
    `;

    document.body.appendChild(viewer);
}

function openViewer(src) {

    ensureViewerExists(); // 🔥 clave

    const viewer = document.getElementById("image-viewer");
    const viewerImg = document.getElementById("viewer-img");

    viewerImg.src = src;
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