function initServices() {

    const contenedor = document.getElementById("services-container");
    if (!contenedor) return;

    contenedor.innerHTML = "";

    SERVICES_DATA.forEach(servicio => {

        const card = document.createElement("div");
        card.className = "servicio-card";

        const h3 = document.createElement("h3");
        h3.textContent = servicio.titulo;

        const img = document.createElement("img");
        img.src = servicio.imagen;
        img.alt = servicio.titulo;

        const p = document.createElement("p");
        p.textContent = servicio.texto;

        card.append(h3, img, p);
        contenedor.appendChild(card);
    });
}
