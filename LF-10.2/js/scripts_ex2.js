const tiles = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let myMap = L.map('mymap').setView([41.387028, 2.170019],17);
L.tileLayer(tiles, {
    maxZoom: 19,
    tileSize: 512,
    zoomOffset: -1,
}).addTo(myMap);
const pin_icon = L.icon({
    iconUrl:'img/map-pin.png',
    iconSize: [50,50],
    iconAnchor:[25,25]
})
let marker = L.marker()
myMap.on('click', function(e){
    let latlng = myMap.mouseEventToLatLng(e.originalEvent)
    if(marker){
        myMap.removeLayer(marker);
    }
     marker = new L.marker([latlng.lat, latlng.lng],{icon:pin_icon}).addTo(myMap)
     let currentPin = marker.getLatLng()
     marker.bindPopup(' lat: ' +currentPin.lat+ ' - Lng: '+ currentPin.lng ).addTo(myMap)
     marker.openPopup()
     myMap.setView([currentPin.lat,currentPin.lng],19)
});