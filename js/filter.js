import { getMarkers, removeMarkers } from './map.js';
import { returnOriginalState } from './form.js';
const mapFiltersElement = document.querySelector('.map__filters');
const housingTypeSelectElement = document.querySelector('#housing-type');
const housingPriceSelectElement = document.querySelector('#housing-price');
const housingRoomsSelectElement = document.querySelector('#housing-rooms');
const housingGuestsSelectElement = document.querySelector('#housing-guests');
const housingFeatureFieldsetElement = document.querySelector('#housing-features');
const buttonReset = document.querySelector('.ad-form__reset');
const ANY_VALUE = 'any';
const PriceKey = {
  ANY: ANY_VALUE,
  LOW: 'low',
  MIDDLE: 'middle',
  HIGH: 'high',
};
const PriceValue = {
  MIN: 10000,
  MAX: 50000,
};

const housingTypeIsCorrect = (itemValue, filterValue) => filterValue === ANY_VALUE ?
  true :
  itemValue === filterValue;

const housingPriceIsCorrect = (itemValue, filterValue) => {
  switch (filterValue) {
    case PriceKey.ANY:
      return true;
    case PriceKey.LOW:
      return itemValue < PriceValue.MIN;
    case PriceKey.MIDDLE:
      return itemValue >= PriceValue.MIN && itemValue <= PriceValue.MAX;
    case PriceKey.HIGH:
      return itemValue > PriceValue.MAX;
    default: return false;
  }
};

const housingRoomsIsCorrect = (itemValue, filterValue) =>
  filterValue === ANY_VALUE ?
    true :
    itemValue === Number(filterValue);


const housingGuestsIsCorrect = (itemValue, filterValue) =>
  filterValue === ANY_VALUE ?
    true :
    itemValue.toString() === filterValue;

const housingFeatureIsCorrect = (itemFeatures, filterFeature) => {
  const filterFeatures = filterFeature.querySelectorAll('input:checked');
  if (filterFeatures.length === 0) { return true; }
  if (!itemFeatures) { return false; }
  return Array.from(filterFeatures).every((element) =>
    itemFeatures.indexOf(element.value) !== -1);

};

const cardIsCorrect = (card) =>
  housingTypeIsCorrect(card.offer.type, housingTypeSelectElement.value) &&
  housingPriceIsCorrect(card.offer.price, housingPriceSelectElement.value) &&
  housingRoomsIsCorrect(card.offer.rooms, housingRoomsSelectElement.value) &&
  housingGuestsIsCorrect(card.offer.guests, housingGuestsSelectElement.value) &&
  housingFeatureIsCorrect(card.offer.features, housingFeatureFieldsetElement);

const getFilteredCards = (cards) => {
  const filteredCards = [];
  cards.forEach((element) => {
    const currentCard = element;
    if (filteredCards.length <= 10 && cardIsCorrect(currentCard)) {
      filteredCards.push(currentCard);
    }
  });
  return filteredCards;
};
const updateMarkers = (cards) => {
  const filteredCards = getFilteredCards(cards);
  removeMarkers();
  getMarkers(filteredCards);
};

const mapFiltersClick = (cb) => mapFiltersElement.addEventListener('change', () => cb());

const resetFilter = () => {
  mapFiltersElement.reset();
};
const clickReset = (cards) => {
  buttonReset.addEventListener('click', () => {
    resetFilter();
    removeMarkers();
    getMarkers(cards.slice(0, 10));
    returnOriginalState();
  });
};
export { updateMarkers, mapFiltersClick, resetFilter, clickReset };
