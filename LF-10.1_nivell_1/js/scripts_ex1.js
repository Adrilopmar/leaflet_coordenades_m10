const tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let myMap = L.map('mymap').setView([41.387028, 2.170019],17);
L.tileLayer(tiles, {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(myMap);
let marker = L.marker([41.38690293593986, 2.166019116339131]).addTo(myMap).bindPopup(
    '<h3>Restaurant Centfocs</h3><p>Restaurante mediterráneo <br> Carrer Balmes, 16 08007 Barcelona</p>');
marker.on('click', function (e) {
    marker.openPopup()
  })