import { getMarkers, removeMarkers } from './map.js';
const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
//const housingFeature = document.querySelector('#housing-features');

const clickType = (cb) => {
  housingType.addEventListener('change', () => {
    removeMarkers();
    cb();
  });
};

const clickPrice = (cb) => {
  housingPrice.addEventListener('change', () => {
    removeMarkers();
    cb();
  });
};

const clickRooms = (cb) => {
  housingRooms.addEventListener('change', () => {
    removeMarkers();
    cb();
  });
};

const clickGuests = (cb) => {
  housingGuests.addEventListener('change', () => {
    removeMarkers();
    cb();
  });
};
/*
const clickFeatures = (cb) => {
  housingFeature.addEventListener('change', (event) => {
    removeMarkers();
    cb();
  });
};
const filterFeatures = (card) => {
  const housingFeatures = housingFeature.querySelectorAll('input');
  housingFeatures.forEach((item) => {
    if (item.checked && card.offer.features.includes(item.value) ) { return true; }
  });
};
*/
const filterGuets = (card) => {
  if (card.offer.guests === Number(housingGuests.options[housingGuests.selectedIndex].value)) { return true; }
  if (housingGuests.options[housingGuests.selectedIndex].value === 'any') { return true; }
  if (card.offer.guests === housingGuests.options[housingGuests.selectedIndex] === 'не для гостей') { return true; }
};


const filterCards = (cards) => {
  const newCards = cards.filter((card) => {
    if (card.offer.type === housingType.options[housingType.selectedIndex].value) {
      if (housingPrice.options[housingPrice.selectedIndex].value === 'low' && card.offer.price < 10000) {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
      if (housingPrice.options[housingPrice.selectedIndex].value === 'middle' && card.offer.price >= 10000 && card.offer.price < 50000) {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
      if (housingPrice.options[housingPrice.selectedIndex].value === 'high' && card.offer.price >= 50000) {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
      if (housingPrice.options[housingPrice.selectedIndex].value === 'any') {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }

    }

    if (housingType.options[housingType.selectedIndex].value === 'any') {
      if (housingPrice.options[housingPrice.selectedIndex].value === 'low' && card.offer.price < 10000) {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
      if (housingPrice.options[housingPrice.selectedIndex].value === 'middle' && card.offer.price >= 10000 && card.offer.price < 50000) {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
      if (housingPrice.options[housingPrice.selectedIndex].value === 'high' && card.offer.price >= 50000) {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
      if (housingPrice.options[housingPrice.selectedIndex].value === 'any') {
        if (card.offer.rooms === Number(housingRooms.options[housingRooms.selectedIndex].value)) {
          return filterGuets(card);
        }
        if (housingRooms.options[housingRooms.selectedIndex].value === 'any') {
          return filterGuets(card);
        }
      }
    }
    else {
      return false;
    }
  });
  getMarkers(newCards.slice(0, 10));
};

export { clickType, clickGuests, clickPrice, clickRooms, filterCards };
