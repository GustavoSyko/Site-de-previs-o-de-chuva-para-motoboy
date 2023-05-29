// Script de carregamento dinamico, poderia ser no html de forma "inline" .
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDAJdRWpW9nH3RAAMz5dq2F9lCUT4aM3nA&libraries=places&callback=initMap';
script.async = true;
document.head.appendChild(script);

let map;
let marker;
let geocoder;
let infoWindow;
let autocomplete;


function initMap() {
  // cria novo google maps,na div "mapa".
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
  // cria nova janela de informação.
  infoWindow = new google.maps.InfoWindow();




  //Obter a localização do usuário,conferir se o navegador suporta informar localização,
  // e então pegar e jogar no mapa.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      // Criar marcador para a localização atual do usuário
      var userLocation = new google.maps.LatLng(latitude, longitude);
      var userMarker = new google.maps.Marker({
        position: userLocation,
        map: map,
        title: 'Você'
      });

      // Criar a janela de informação para exibir "Você"
      var infoWindow = new google.maps.InfoWindow({
        content: 'Você'
      });

      // Abrir a janela de informação acima do marcador
      infoWindow.open(map, userMarker);

      // Centralizar o mapa na localização atual do usuário
      map.setCenter(userLocation);
    }, function (error) {
      console.log("Erro ao obter a localização do usuário:", error);
    });
  } else {
    console.log("O navegador não suporta Geolocation.");
  }


  // Geocoder da API do Google maps.
  geocoder = new google.maps.Geocoder();

  // Definindo valores.
  const botoes = document.getElementById("botoes");
  const inputText = document.getElementById("pesquisa");
  const submitButton = document.getElementById("procurar");
  const clearButton = document.getElementById("limpar");

  // Cria um objeto de opções para o Autocomplete
  var autocompleteOptions = {
    types: ["address"], // Define o tipo de sugestões para endereços
    componentRestrictions: { country: "br",  }, // Restringe as sugestões ao Brasil
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(-26.992644, -49.092737), // Canto sudoeste de Blumenau
      new google.maps.LatLng(-26.841561, -49.000334)  // Canto nordeste de Blumenau
    )
  };

  // Cria um novo objeto Autocomplete vinculado ao campo de entrada de texto
  autocomplete = new google.maps.places.Autocomplete(
    inputText,
    autocompleteOptions
  );

  // Define o campo de entrada como parte do formulário
  autocomplete.setFields(["address_component", "geometry"]);

  // Evento acionado quando uma sugestão é selecionada
  autocomplete.addListener("place_changed", function () {
    var place = autocomplete.getPlace();
    if (!place.geometry) {
      window.alert("Nenhum local encontrado para o endereço selecionado.");
      return;
    }

    // Centraliza o mapa no local selecionado
    map.setCenter(place.geometry.location);

    // Remove o marcador anterior, se houver
    if (marker) {
      marker.setMap(null);
    }

    // Cria um novo marcador no local selecionado
    marker = new google.maps.Marker({
      position: place.geometry.location,
      map: map,
    });

    // Configura a caixa de informações do marcador
    infoWindow.setContent(place.formatted_address);
    infoWindow.open(map, marker,);
  });


  // Inserindo a div "botoes" para baixo do mapa.
  map.controls[google.maps.ControlPosition.LEFT_TOP].push(botoes);
  // Dando uma margem para esta div.
  botoes.style.marginTop = '5%';
  


  // Colocando marcador no mapa.
  marker = new google.maps.Marker({
    map,
  });
  // Ao clicar joga a informação para função geocode().
  map.addListener("click", (e) => {
    geocode({ location: e.latLng });
  });
  // Ao clicar no botao pesquisar joga a informação para função geocode().
  submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value })
  );
  // Ao clicar limpa a informação da tela.
  clearButton.addEventListener("click", () => {
    clear();
  });

  clear();
}
// Função para limpar o mapa.
function clear() {
  marker.setMap(null);
  document.getElementById("pesquisa").value =""
  
  

}
// Função  fetch() que faz todo o processo de pegar informação do json especifica
// centralizar no mapa,colocar marcador, e tambem janela de informação .
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

// chamada para iniciar o mapa.
window.initMap = initMap;