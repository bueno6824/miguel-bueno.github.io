// modals.js
export { };

// Abrir modal contacto
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal && window.$) {
        $(modal).modal('show');
    }
}

// Modal proyecto
const botonesVerMas = document.querySelectorAll(".btn-ver-mas");

const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const carouselInner = document.getElementById("carouselInner");

if (modalTitulo && modalDescripcion && carouselInner) {
    botonesVerMas.forEach(boton => {
        boton.addEventListener("click", () => {
            const titulo = boton.dataset.titulo || "";
            const descripcion = boton.dataset.descripcion || "";
            const imagenes = JSON.parse(boton.dataset.imagenes || "[]");

            modalTitulo.textContent = titulo;

            modalDescripcion.innerHTML = descripcion.replace(/\n/g, "<br>");

            // Reset carrusel
            carouselInner.innerHTML = "";

            imagenes.forEach((src, index) => {
                const item = document.createElement("div");
                item.className = `carousel-item ${index === 0 ? "active" : ""}`;

                item.innerHTML = `
                    <img src="${src}" class="d-block w-100 rounded" alt="${titulo}">
                `;

                carouselInner.appendChild(item);
            });

            // Fuerza slide 0 (Bootstrap)
            const carousel = document.querySelector('#carouselProyecto');

            if (carousel && bootstrap?.Carousel) {
                const instance = bootstrap.Carousel.getOrCreateInstance(carousel, {
                    interval: 3500,
                    ride: 'carousel',
                    pause: 'hover'
                });

                instance.to(0);
                instance.cycle(); // 👈 vuelve a moverse solo
            }

        });
    });
}

const btnArriba = document.getElementById("btn-ir-arriba");

// Cuando se abre CUALQUIER modal
document.addEventListener('show.bs.modal', () => {
    if (btnArriba) btnArriba.classList.add("oculto-modal");
});

// Cuando se cierra CUALQUIER modal
document.addEventListener('hidden.bs.modal', () => {
    if (btnArriba) btnArriba.classList.remove("oculto-modal");
});

