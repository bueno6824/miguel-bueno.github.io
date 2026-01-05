// map.js
let map;
let marker;

const darkMapStyle = [

    { elementType: "geometry", stylers: [{ color: "#1d1d1d" }] },// fondo general
    /*texto*/{ elementType: "labels.text.fill", stylers: [{ color: "#eaeaea" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#000000" }] },
    { featureType: "road", elementType: "geometry", stylers: [{ color: "#3a3a3a" }] },
    { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#5a5a5a" }] },
    { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#cfcfcf" }] },
    { featureType: "road.highway", elementType: "geometry", stylers: [{ color: "#505050" }] },//+Autopistas
    { featureType: "poi", elementType: "geometry", stylers: [{ color: "#242424" }] },// POIs (lugares)
    { featureType: "water", elementType: "geometry", stylers: [{ color: "#0f1a24" }] }]; // Agua

const lightMapStyle = [];

// 👇 ESTO ES CLAVE
window.initMap = () => {
    const mapContainer = document.getElementById("map");
    if (!mapContainer) return;

    const leon = { lat: 21.125, lng: -101.685 };
    const isDark = document.body.classList.contains("dark");

    map = new google.maps.Map(mapContainer, {
        zoom: 12,
        center: leon,
        styles: isDark ? darkMapStyle : lightMapStyle,
        disableDefaultUI: true
    });

    marker = new google.maps.Marker({
        position: leon,
        map,
        title: "Estoy en León 🚀",
        icon: getMarkerIcon(isDark)
    });
};

function getMarkerIcon(isDark) {
    return {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 8,
        fillColor: isDark ? "#00d4ff" : "#0d6efd",
        fillOpacity: 1,
        strokeWeight: 2,
        strokeColor: "#ffffff"
    };
}

document.addEventListener("themeChanged", () => {
    if (!map) return;

    const overlay = document.querySelector(".map-overlay");
    const isDark = document.body.classList.contains("dark");

    // activa animación
    overlay.classList.add("active");

    setTimeout(() => {
        map.setOptions({
            styles: isDark ? darkMapStyle : lightMapStyle
        });

        if (marker) {
            marker.setIcon(getMarkerIcon(isDark));
        }
    }, 200);

    setTimeout(() => {
        overlay.classList.remove("active");
    }, 450);
});

