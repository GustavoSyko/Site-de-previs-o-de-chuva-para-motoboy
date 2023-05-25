
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAJdRWpW9nH3RAAMz5dq2F9lCUT4aM3nA&callback=initMap';
script.async = true;
document.head.appendChild(script);

window.initMap = function initMap() {
    map = new google.maps.Map(document.getElementById("mapa"), {
        center: { lat: -26.901743, lng: -49.092115 },
        zoom: 8,
    });
}

window.initMap = initMap;