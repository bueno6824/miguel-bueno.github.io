export { };

const toggleDark = document.getElementById("toggle_dark");
const icon = toggleDark?.querySelector(".theme-icon");

let mode = localStorage.getItem("modo") || "auto";

localStorage.getItem("modo")


const setVisualTheme = (theme) => {
    const root = document.documentElement;

    if (theme === "dark") {
        document.body.classList.add("dark");
        root.style.setProperty("--luz-global", "0.85");
        root.style.setProperty("--tono-calido", "15deg");
        if (icon) icon.textContent = "🌙";
    }

    if (theme === "light") {
        document.body.classList.remove("dark");
        root.style.setProperty("--luz-global", "1");
        root.style.setProperty("--tono-calido", "0deg");
        if (icon) icon.textContent = "☀️";
    }

    document.dispatchEvent(new Event("themeChanged"));
};

const applyAutoTheme = () => {
    const hour = new Date().getHours();

    if (hour >= 7 && hour < 19) {
        setVisualTheme("light");
    } else {
        setVisualTheme("dark");
    }

    if (icon) icon.textContent = "🕑";
};

// inicialización
const init = () => {
    if (mode === "auto") applyAutoTheme();
    else setVisualTheme(mode);
};

init();

// ciclo: auto → light → dark → auto
toggleDark?.addEventListener("click", () => {
    mode = mode === "auto" ? "light" : mode === "light" ? "dark" : "auto";
    localStorage.setItem("modo", mode);

    if (mode === "auto") applyAutoTheme();
    else setVisualTheme(mode);
});

// auto se vuelve a evaluar cada minuto
setInterval(() => {
    if (mode === "auto") applyAutoTheme();
}, 60_000);

