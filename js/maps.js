let map;

const darkMapStyle = [
    { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#eaeaea" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#3a3a3a" }] },
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f1a24" }] }
];

window.initMap = () => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const leon = { lat: 21.125, lng: -101.685 };
    const isDark = document.body.classList.contains("dark");

    map = new google.maps.Map(mapContainer, {
        zoom: 12,
        center: leon,
        styles: isDark ? darkMapStyle : [],
    });

    new google.maps.Marker({
        position: leon,
        map,
        title: "Estoy en León 🚀",
    });
};

/* Reacciona al cambio de tema */
document.addEventListener("themeChanged", () => {
    if (!map || !window.google) return;

    const isDark = document.body.classList.contains("dark");
    map.setOptions({
        styles: isDark ? darkMapStyle : []
    });
});
