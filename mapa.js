
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAJdRWpW9nH3RAAMz5dq2F9lCUT4aM3nA&callback=initMap';
script.async = true;
document.head.appendChild(script);

let map;
let marker;
let geocoder;
let infoWindow;



function initMap() {
    map = new google.maps.Map(document.getElementById("mapa"), {
        zoom: 15,
        center: { lat: -26.911864, lng: -49.102144 },
        mapTypeControl: true,
        /* # PARA DEIXAR ESCURO # styles: [
             { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
             { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
             { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
             {
               featureType: "administrative.locality",
               elementType: "labels.text.fill",
               stylers: [{ color: "#d59563" }],
             },
             {
               featureType: "poi",
               elementType: "labels.text.fill",
               stylers: [{ color: "#d59563" }],
             },
             {
               featureType: "poi.park",
               elementType: "geometry",
               stylers: [{ color: "#263c3f" }],
             },
             {
               featureType: "poi.park",
               elementType: "labels.text.fill",
               stylers: [{ color: "#6b9a76" }],
             },
             {
               featureType: "road",
               elementType: "geometry",
               stylers: [{ color: "#38414e" }],
             },
             {
               featureType: "road",
               elementType: "geometry.stroke",
               stylers: [{ color: "#212a37" }],
             },
             {
               featureType: "road",
               elementType: "labels.text.fill",
               stylers: [{ color: "#9ca5b3" }],
             },
             {
               featureType: "road.highway",
               elementType: "geometry",
               stylers: [{ color: "#746855" }],
             },
             {
               featureType: "road.highway",
               elementType: "geometry.stroke",
               stylers: [{ color: "#1f2835" }],
             },
             {
               featureType: "road.highway",
               elementType: "labels.text.fill",
               stylers: [{ color: "#f3d19c" }],
             },
             {
               featureType: "transit",
               elementType: "geometry",
               stylers: [{ color: "#2f3948" }],
             },
             {
               featureType: "transit.station",
               elementType: "labels.text.fill",
               stylers: [{ color: "#d59563" }],
             },
             {
               featureType: "water",
               elementType: "geometry",
               stylers: [{ color: "#17263c" }],
             },
             {
               featureType: "water",
               elementType: "labels.text.fill",
               stylers: [{ color: "#515c6d" }],
             },
             {
               featureType: "water",
               elementType: "labels.text.stroke",
               stylers: [{ color: "#17263c" }],
             },
           ], */
    });
    infoWindow = new google.maps.InfoWindow();




    //Obter a localização do usuário.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            map.setCenter({ lat: latitude, lng: longitude });
        }, function (error) {
            console.log("Erro ao obter a localização do usuário:", error);
        });
    } else {
        console.log("O navegador não suporta Geolocation.");
    }



    geocoder = new google.maps.Geocoder();

    const inputText = document.getElementById("pesquisa");
    const submitButton = document.getElementById("procurar");
    const clearButton = document.getElementById("limpar");

    map.controls[google.maps.ControlPosition.TOP_CENTER].push(inputText);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(submitButton);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(clearButton);

    marker = new google.maps.Marker({
        map,
    });

    map.addListener("click", (e) => {
        geocode({ location: e.latLng });
    });

    submitButton.addEventListener("click", () =>
        geocode({ address: inputText.value })
    );

    clearButton.addEventListener("click", () => {
        clear();
    });

    clear();
}

function clear() {
    marker.setMap(null);
    
}

function geocode(geocodeData) {
    clear();
    geocoder
      .geocode(geocodeData)
      .then((result) => {
        const { results } = result;
        const address = results[0].formatted_address;
  
        map.setCenter(results[0].geometry.location);
        marker.setPosition(results[0].geometry.location);
        marker.setMap(map);
  
        // Configurar a caixa de informações do marcador
        infoWindow.setContent(address);
        infoWindow.open(map, marker);
  
        return results;
      })
      .catch((e) => {
        alert("Geocode was not successful for the following reason: " + e);
      });
  }
  

window.initMap = initMap;