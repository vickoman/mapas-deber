LAT_TRABAJO = -2.145909069102894;
LONG_TRABAJO = -79.96526396053392;

// Marcadores del lugar de trabajo
var marcadores = [
  {
    lat: -2.147455600306841,
    lng: -79.96614982720448,
    titulo: "Laboratorio de Profesores",
    descripcion:
      "Laboratorio de Profesores de la Universidad Politecnica Del Litoral",
  },
  {
    lat: -2.144619609423056,
    lng: -79.9676514339346,
    titulo: "Facultad de Ingeniería en Electricidad y Computación FIEC",
    descripcion:
      "Facultad de Ingeniería en Electricidad y Computación de la Universidad Politecnica Del Litoral",
  },
  {
    lat: -2.1460751889468765,
    lng: -79.9668414432016,
    titulo: "Cafeteria Sweeth and Coffee",
    descripcion:
      "Cafeteria Sweeth and Coffee de la Universidad Politecnica Del Litoral",
  },
];

// Renderizar el mapa del trabajo
var mapaTrabajo = L.map("mapaTrabajo").setView([LAT_TRABAJO, LONG_TRABAJO], 16);
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 22,
}).addTo(mapaTrabajo);

// Agregar marcadoeres al mapa del trabajo
marcadores.forEach(function (marcador) {
  L.marker([marcador.lat, marcador.lng])
    .addTo(mapaTrabajo)
    .bindPopup(
      "<strong>" + marcador.titulo + "</strong><br>" + marcador.descripcion
    );
});

// Agreagar Cancha de Futbol usando Vetores (Rectangulo)
var cancha = [
  [-2.1423809877752524, -79.9679839734274],
  [-2.143254645657242, -79.9674230484904],
];
var cancha_futbol_espol = L.rectangle(cancha, {
  color: "red",
  backgroundColor: "red",
  weight: 2,
}).addTo(mapaTrabajo);
cancha_futbol_espol.bindPopup("Cancha de Fútbol de ESPOL");

// Lago de la ESPOL usando Polylines
var latlngs = [
  [-2.1458145649739953, -79.96358670984667],
  [-2.1456695420653875, -79.96346357376835],
  [-2.145713488402785, -79.96341080116336],
  [-2.145651963530083, -79.96330965367048],
  [-2.145691515234239, -79.9630018134747],
  [-2.145599227922946, -79.96287427967931],
  [-2.1455157298745733, -79.96291385913305],
  [-2.145427837187158, -79.96288747283056],
  [-2.1452652357021273, -79.96297982488929],
  [-2.145142185918187, -79.96315573357259],
  [-2.1445928563945467, -79.96250487144366],
  [-2.1446939330398003, -79.9623157696091],
  [-2.144689538403188, -79.9620650997354],
  [-2.144606040305173, -79.96188479333503],
  [-2.1445489100249495, -79.96154616911969],
  [-2.144711511586123, -79.96131748783138],
  [-2.1448169828598083, -79.96128670381181],
  [-2.144773036496661, -79.9614142376072],
  [-2.14478182576939, -79.96148899879759],
  [-2.1449004809463093, -79.96179244127629],
  [-2.144909270218313, -79.96177924812504],
  [-2.144997162935524, -79.96179683899337],
  [-2.1450411092922335, -79.96187160018378],
  [-2.1452081054362293, -79.96194636137417],
  [-2.1453003927711345, -79.9619199750717],
  [-2.146104610739634, -79.96141863532428],
  [-2.14621447654949, -79.96126031750931],
  [-2.1463331316152687, -79.96125591979224],
  [-2.146737437696159, -79.96103163622104],
  [-2.146794567894604, -79.96093048872812],
  [-2.14690882828512, -79.9609392841623],
  [-2.1474317891942016, -79.96064463711777],
  [-2.1475328656811272, -79.9604159557628],
  [-2.147774570226505, -79.96031480826991],
  [-2.148196454455525, -79.95975629817367],
  [-2.148301925488748, -79.95990582055447],
  [-2.1480262405653625, -79.96043393691805],
  [-2.148021995635754, -79.96055712643553],
  [-2.148064444931265, -79.96063358889467],
  [-2.1481302413369816, -79.96069305969621],
  [-2.1481535884480145, -79.96077589402692],
  [-2.1483191406795727, -79.9609139512448],
  [-2.148452855930436, -79.96094156268836],
  [-2.1485780813134827, -79.96089908354439],
  [-2.148633265381076, -79.96081624920957],
  [-2.1489537574047617, -79.96064633263373],
  [-2.1490365334794097, -79.96068668782048],
  [-2.1490365334794097, -79.96079713359478],
  [-2.14899620667437, -79.96085023252473],
  [-2.148891996431966, -79.9607992251978],
  [-2.1488393960700174, -79.96084632179785],
  [-2.148717584698526, -79.96098484120975],
  [-2.1483300029973353, -79.96119262032762],
  [-2.147917505221596, -79.9617494683635],
  [-2.147875978593714, -79.96129789508066],
  [-2.1474302593832895, -79.96110950868047],
  [-2.1469540871450077, -79.96149182227346],
  [-2.14668554808447, -79.96192400286486],
  [-2.1464696094330296, -79.96186305432363],
  [-2.1460128160314165, -79.96217610819453],
  [-2.1458217932957258, -79.96322331494855],
  [-2.1458993097710635, -79.96345602756055],
  [-2.1458145649739953, -79.96358670984667],
];

var polygon = L.polygon(latlngs, { color: "purple" }).addTo(mapaTrabajo);
polygon.bindPopup("<strong>Lago de la Espol:</strong>");