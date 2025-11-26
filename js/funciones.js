var toggle = null;

function initMap() {
    // Coordenadas (ejemplo: LeÃ³n, Guanajuato)
    const leon = { lat: 21.125, lng: -101.685 };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 12,
        center: leon,
    });

    // Agregar marcador
    const marker = new google.maps.Marker({
        position: leon,
        map: map,
        title: "Estoy en LeÃ³n ðŸš€",
    });
}

function cargarDark() {
    toggle = document.getElementById('switch__input').checked;

    console.log(toggle);
    if (toggle == true) {
        $('#body').addClass("dark");
        $('#header').addClass("fixed");
        $('#nav').addClass("fixed");
        $('.box').addClass("fixed");
    } else {
        $('#body').removeClass("dark");
        $('#header').removeClass("fixed");
        $('#nav').removeClass("fixed");
        $('.box').removeClass("fixed");
    }

}






























