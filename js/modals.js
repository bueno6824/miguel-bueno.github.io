// modals.js
export { }; // si no exporta nada específico, esto indica que es un módulo


// Abrir modal contacto
function abrirModal(idModal) {
    const modal = document.getElementById(idModal);
    if (modal) $(modal).modal('show');
}

// Abrir modal proyecto
const botonesVerMas = document.querySelectorAll(".btn-ver-mas");
botonesVerMas.forEach(boton => {
    boton.addEventListener("click", () => {
        const titulo = boton.dataset.titulo;
        const imagen = boton.dataset.imagen;
        const descripcion = boton.dataset.descripcion;

        document.getElementById("modalTitulo").textContent = titulo;
        document.getElementById("modalImagen").src = imagen;
        document.getElementById("modalImagen").alt = titulo;
        document.getElementById("modalDescripcion").textContent = descripcion;
    });
});
