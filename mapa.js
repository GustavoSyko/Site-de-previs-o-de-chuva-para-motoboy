// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAJdRWpW9nH3RAAMz5dq2F9lCUT4aM3nA&callback=initMap';
script.async = true;
document.head.appendChild(script);

let map;

window.initMap = function initMap() {
  map = new google.maps.Map(document.getElementById("mapa"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
};


window.initMap = initMap;