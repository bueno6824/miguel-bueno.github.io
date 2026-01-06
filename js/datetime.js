export { };

const timeEl = document.getElementById("footer-time");
const dateEl = document.getElementById("footer-date");

if (timeEl && dateEl) {
    const updateDateTime = () => {
        const now = new Date();

        const time = now.toLocaleTimeString("es-MX", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

        const date = now.toLocaleDateString("es-MX", {
            weekday: "short",
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        timeEl.textContent = time;
        dateEl.textContent = date;
    };

    updateDateTime();
    setInterval(updateDateTime, 1000);
}

timeEl.style.opacity = 0.6;
setTimeout(() => timeEl.style.opacity = 1, 150);
