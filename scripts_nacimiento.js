LAT_PASAJE = "-3.325712813018922";
LONG_PASAJE = "-79.80749394450677";

var marcadores = [
  {
    lat: "-3.3295194171647227",
    lng: "-79.81468150367871",
    titulo: "Estadio Carlos Falquez Batallas",
    descripcion:
      "El estadio Carlos Falquez Batallas es un estadio multiusos. Está ubicado en la ciudad de Pasaje, provincia de El Oro. Fue inaugurado el 24 de julio de 1998. Es usado mayoritariamente para la práctica del fútbol. Tiene capacidad para 8000 espectadores.",
  },
  {
    lat: "-3.323215542877594",
    lng: "-79.79985634631626",
    titulo: "Cementerio General de Pasaje",
    descripcion:
      "El Cementerio General de Pasaje es un camposanto ubicado en la ciudad de Pasaje, provincia de El Oro. Es uno de los cementerios más grandes de la provincia de El Oro.",
  },
  {
    lat: "-3.3344703894921635",
    lng: "-79.80132434015722",
    titulo: "Coliseo Cesar Fadul Dibb",
    descripcion:
      "El legendario Coliseo César Fadul Dibb. Único coliseo del Ecuador certificado por la Federación Internacional de Baloncesto (FIBA), para la realización de eventos internacionales. ",
  },
];

// Iniciacion del mapa
var mapaNacimiento = L.map("mapaNacimiento").setView(
  [LAT_PASAJE, LONG_PASAJE],
  15
);
// Capa Basica de OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 22,
}).addTo(mapaNacimiento);

// Agreagar los marcadores que estan dentro de la matriz marcadores
marcadores.forEach(function (marcador) {
  L.marker([marcador.lat, marcador.lng])
    .addTo(mapaNacimiento)
    .bindPopup(
      "<strong>" + marcador.titulo + "</strong><br>" + marcador.descripcion
    );
});

// Usar Rectangulo para pintar la parte centrica de Pasaje
var centro_pasaje = [
  [-3.326875659107103, -79.81185880808202],
  [-3.3306275724380203, -79.80172626011326],
];
var centro = L.rectangle(centro_pasaje, { color: "red", weight: 2 }).addTo(
  mapaNacimiento
);
centro.bindPopup("Centro de Pasaje");

// Mostrar en un circulo el estadio de Pasaje Carlos Falquez Batallas
L.circle([-3.329818337438203, -79.81532229720588], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.5,
  radius: 1000,
}).addTo(mapaNacimiento);

// Avenida que conecta el cambio con pasaje
var latlngs = [
  [-3.2866754374789164, -79.91428824366648],
  [-3.2879955871076567, -79.91184702742456],
  [-3.293936238802015, -79.90518454143103],
  [-3.2993691114554236, -79.89918321816967],
  [-3.306629820122196, -79.89084239600982],
  [-3.312925776562576, -79.87166867547533],
  [-3.313230418584236, -79.87065150204121],
  [-3.3147342255392913, -79.85914977449352],
  [-3.317219182881022, -79.85417299421249],
  [-3.321813223483204, -79.83519838263182],
  [-3.3271595165286922, -79.82538895873917],
  [-3.3290491808158333, -79.81607411167883],
];

var poliline = L.polyline(latlngs, { color: "blue" }).addTo(mapaNacimiento);
poliline.bindPopup("<strong>Carretera que une El Cambio y Pasaje</strong>");
