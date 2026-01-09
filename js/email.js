// email.js
export { }; // si no exporta nada específico, esto indica que es un módulo


// Inicialización EmailJS
(function () {
    emailjs.init("FCsVdDppCH38FJojE");
})();

const form = document.getElementById("form-contacto");
const btnEnviar = document.getElementById("btnEnviar");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    btnEnviar.disabled = true;
    btnEnviar.textContent = "Enviando...";

    emailjs.sendForm("service_4sb9uwe", "template_s937e0i", this)
        .then(() => {
            Swal.fire({
                icon: "success",
                title: "Mensaje enviado 🎉",
                text: "Gracias por escribirme. Te respondo pronto.",
                confirmButtonColor: "#000"
            });

            const modal = bootstrap.Modal.getInstance(document.getElementById("modal_contacto"));
            modal.hide();
            form.reset();
        })
        .catch((error) => {
            Swal.fire({
                icon: "error",
                title: "Error al enviar",
                text: "Ocurrió un problema, intenta nuevamente.",
                confirmButtonColor: "#000"
            });
            console.error("Error:", error);
        })
        .finally(() => {
            btnEnviar.disabled = false;
            btnEnviar.textContent = "Enviar";
        });
});
