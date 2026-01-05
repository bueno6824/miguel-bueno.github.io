// darkmode.js
export { }; // si no exporta nada específico, esto indica que es un módulo


const toggleDark = document.getElementById("toggle_dark");

if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("dark");
}

toggleDark.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // 👇 avisa al mapa
    document.dispatchEvent(new Event("themeChanged"));

    if (document.body.classList.contains("dark")) localStorage.setItem("modo", "oscuro");
    else localStorage.setItem("modo", "claro");
});
