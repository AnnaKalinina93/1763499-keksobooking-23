import { createCard } from './card.js';

let map;
let mainPinMarker;
const markerGroup = L.layerGroup();
const LAT_CENTRE = 35.6894;
const LNG_CENTRE = 139.69224;
const address = document.querySelector('#address');

function initailizeMap(callback) {
  map = L.map('map-canvas');
  map.on('load', callback);
  map.setView({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  }, 12);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
}

const getMainPinIcon = () => {
  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  mainPinMarker = L.marker(
    {
      lat: LAT_CENTRE,
      lng: LNG_CENTRE,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    const addressPoint = evt.target.getLatLng();
    address.value = `${addressPoint.lat.toFixed(5)},${addressPoint.lng.toFixed(5)}`;
  });
};

const returnMainPinIcon = () => {
  mainPinMarker.setLatLng({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  });
  map.setView({
    lat: LAT_CENTRE,
    lng: LNG_CENTRE,
  }, 12);
};

const createMarker = (object) => {
  markerGroup.addTo(map);
  const lat = object.location.lat;
  const lng = object.location.lng;
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker.addTo(markerGroup)
    .bindPopup(createCard(object),
      {
        keepInView: true,
      });

};

const getMarkers = (objects) => {
  objects.forEach((object) => {
    createMarker(object);
  });
};

const removeMarkers = () => markerGroup.clearLayers();

export { initailizeMap, getMainPinIcon, getMarkers, returnMainPinIcon, removeMarkers };
