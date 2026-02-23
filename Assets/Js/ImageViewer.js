function openViewer(src) {
    const viewer = document.getElementById("image-viewer");
    const viewerImg = document.getElementById("viewer-img");

    viewerImg.src = src;
    viewer.classList.remove("hidden");
}

function closeViewer() {
    document.getElementById("image-viewer").classList.add("hidden");
}

// cerrar con X
document.addEventListener("click", e => {
    if (e.target.id === "viewer-close") {
        closeViewer();
    }

    // cerrar tocando fondo oscuro
    if (e.target.id === "image-viewer") {
        closeViewer();
    }
});

// cerrar con ESC
document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
        closeViewer();
    }
});