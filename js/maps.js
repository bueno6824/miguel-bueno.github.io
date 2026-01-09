let map;

const darkMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#eaeaea" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#3a3a3a" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f1a24" }] }
];

// 👉 función única para aplicar tema
function applyMapTheme() {
    if (!map) return;

    const isDark = document.documentElement.classList.contains("dark");

    map.setOptions({
        styles: isDark ? darkMapStyle : []
    });
}

// 👉 Google Maps callback
window.initMap = () => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const leon = { lat: 21.125, lng: -101.685 };

    // 1️⃣ crear mapa neutro
    map = new google.maps.Map(mapContainer, {
        zoom: 12,
        center: leon,
        styles: []
    });

    new google.maps.Marker({
        position: leon,
        map,
        title: "Estoy en León 🚀"
    });

    // 2️⃣ aplicar tema cuando el DOM ya está pintado
    requestAnimationFrame(() => {
        applyMapTheme();
    });
};

// 3️⃣ reaccionar a cambios de tema
document.addEventListener("themeChanged", () => {
    applyMapTheme();
});
