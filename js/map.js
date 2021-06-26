
/* global L:readonly */

import { createObjects } from './data.js';
import { renderCard } from './card.js';

const COUNT = 8;
const objects = createObjects(COUNT);
const address = document.querySelector('#address');

const initailizeMap = () => {
  const map = L.map('map-canvas')
    .setView({
      lat: 35.6894,
      lng: 139.69224,
    }, 10);
  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: '../img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.68945,
      lng: 139.69255,
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

  objects.forEach((object) => {
    const lat = Number(object.location.lat);
    const lng = Number(object.location.lng);
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

    marker.addTo(map)
      .bindPopup(renderCard(object),
        {
          keepInView: true,
        });
  });
  if (map.on('load')) { return true; }
};
export { initailizeMap };
