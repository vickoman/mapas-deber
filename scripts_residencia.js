/**
 * @file scripts_residencia.js
 */
LAT_GUAYAQUIL = "-2.1867357026717724";
LONG_GUAYAQUIL = "-79.89781211639658";

var marcadores = [
  {
    lat: "-2.0854428401758613",
    lng: "-79.91369948534971",
    titulo: "Mi Residencia",
    descripcion: "Descripción Sobre mi Residencia",
  },
  {
    lat: "-2.2152765884694707",
    lng: "-79.85464941049143",
    titulo: "Isla Santai",
    descripcion: "Descripción de la Isla Santai Guayaquil",
  },
  {
    lat: "-2.1456888373969365",
    lng: "-79.96425113949508",
    titulo: "Escuela Superior Politécnica del Litoral",
    descripcion:
      "Descripción de la Escuela Superior Politécnica del Litoral Campus la Prosperina",
  },
  {
    lat: "-2.1918329860958616",
    lng: "-79.87942453138852",
    titulo: "Malecón 2000",
    descripcion: "Descripción del Malecon 2000 Guayaquil",
  },
  {
    lat: "-2.1021192739419545",
    lng: "-79.89841638394867",
    titulo: "Parque Samanes",
    descripcion: "Descripción del Parque Samanes Guayaquil",
  },
];

// Inicializa el mapa de residencia
var mapaResidencia = L.map("mapaResidencia").setView(
  [LAT_GUAYAQUIL, LONG_GUAYAQUIL],
  11
); // Reemplaza con tus coordenadas
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 22,
}).addTo(mapaResidencia);

marcadores.forEach(function (marcador) {
  L.marker([marcador.lat, marcador.lng])
    .addTo(mapaResidencia)
    .bindPopup(
      "<strong>" + marcador.titulo + "</strong><br>" + marcador.descripcion
    );
});

var latlngs = [
  [-2.145218377070511, -80.08991105518538],
  [-2.1250031728957484, -80.08991105518538],
  [-2.1222775070862436, -80.06149919007262],
  [-2.1393128393178817, -80.01581291097132],
  [-2.1402213850690712, -79.99217423919752],
  [-2.172020145536918, -79.99535636809014],
  [-2.18078453890732, -80.02104811245458],
  [-2.1750224378936185, -80.0220391894522],
  [-2.1569285148134694, -80.07311775096196],
];
var polygon = L.polygon(latlngs, { color: "red" }).addTo(mapaResidencia);
polygon.bindPopup(
  "<strong>Bosque Protector Cerro Blanco:</strong><br><strong>Descripción:</strong> Esta es una descripción del área de interés."
);

var latlngs = [
  [-2.155170844818353, -79.87854660423538],
  [-2.154199778586078, -79.87526517651138],
  [-2.1540731177275365, -79.8744342570448],
  [-2.153467960146878, -79.87198374878739],
  [-2.152637627261362, -79.86895582191758],
  [-2.152637627263219, -79.8659138115209],
  [-2.1532568586181964, -79.8634069696705],
  [-2.1534538867213895, -79.86298446824681],
  [-2.1543264394435893, -79.86153388002548],
  [-2.157295929674476, -79.85709761492996],
  [-2.1637978264612885, -79.84747866546728],
  [-2.168090265038265, -79.8411974772724],
];

var poliline = L.polyline(latlngs, { color: "blue" }).addTo(mapaResidencia);
poliline.bindPopup(
  "<strong>Recorrido Del Puente de la Unidad Nacional</strong>"
);
L.circle([-2.2152765884694707, -79.85464941049143], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.5,
  radius: 1000,
}).addTo(mapaResidencia);
