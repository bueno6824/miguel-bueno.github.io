//datetime.js
export { };

const timeEl = document.getElementById("footer-time");
const dateEl = document.getElementById("footer-date");

const updateDateTime = () => {
    const now = new Date();
    const hour = now.getHours();

    if (timeEl && dateEl) {
        timeEl.textContent = now.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });

        dateEl.textContent = now.toLocaleDateString("es-MX", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    }

    const mode = localStorage.getItem("modo") || "auto";

    if (mode === "auto") {
        applyDayMood(hour);
    }
};


const applyDayMood = (hour) => {

    // 🚫 si el usuario eligió manual, NO tocar el tema
    if (localStorage.getItem("themeMode") === "manual") return;

    const root = document.documentElement;
    const body = document.body;

    // 🌅 Mañana
    if (hour >= 6 && hour < 12) {
        root.style.setProperty("--luz-global", "1.05");
        root.style.setProperty("--tono-calido", "5deg");
        body.classList.remove("dark");
    }

    // ☀️ Tarde
    else if (hour >= 12 && hour < 18) {
        root.style.setProperty("--luz-global", "1");
        root.style.setProperty("--tono-calido", "0deg");
        body.classList.remove("dark");
    }

    // 🌇 Noche
    else if (hour >= 18 && hour < 22) {
        root.style.setProperty("--luz-global", "0.92");
        root.style.setProperty("--tono-calido", "-8deg");
        body.classList.add("dark");
    }

    // 🌌 Madrugada
    else {
        root.style.setProperty("--luz-global", "0.85");
        root.style.setProperty("--tono-calido", "-12deg");
        body.classList.add("dark");
    }
};

updateDateTime();
setInterval(updateDateTime, 1000);
