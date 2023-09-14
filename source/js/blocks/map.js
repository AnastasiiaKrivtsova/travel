import * as L from '../vendor/leaflet.js';

const COORDINATES = [55.7745059, 37.6327563];
const ZOOM_SIZE = 16;
const ICON_URL = './img/svg/map-pin.svg';

export const setMap = () => {
  const map = L.map('map', {
    center: COORDINATES,
    zoom: ZOOM_SIZE,
    scrollWheelZoom: false,
  });

  const mapPin = L.icon({
    iconUrl: ICON_URL,

    iconSize: [48, 48],
  });

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  L.marker(COORDINATES, {icon: mapPin}).addTo(map);
};
