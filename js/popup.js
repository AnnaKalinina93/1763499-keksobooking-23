import {createObjects} from './data.js';
const map = document.querySelector('.map')
  .querySelector('#map-canvas');
const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const COUNT = 8;
const cards = createObjects(COUNT);
const cardsListFragment = document.createDocumentFragment();

cards.forEach((object) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = object.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = object.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${object.offer.price} ₽/ночь`;
  const type = () => {
    if (object.offer.type === 'palace') { return 'Дворец';}
    if (object.offer.type === 'flat') {return 'Квартира';}
    if (object.offer.type === 'house') {return 'Дом';}
    if (object.offer.type === 'bungalow') {return 'Бунгало';}
    if (object.offer.type === 'hotel') {return 'Отель';}
  };
  cardElement.querySelector('.popup__type').textContent = type;
  cardElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;
  cardElement.querySelector('.popup__features').textContent = object.offer.features;
  cardElement.querySelector('.popup__description').textContent = object.offer.description;
  cardElement.querySelector('.popup__photos')
    .querySelector('src').innerHTML = object.offer.photos;
  cardElement.querySelector('.popup__avatar')
    .querySelector('src').innerHTML = object.author.avatar;
  cardsListFragment.appendChild(cardElement);
});
map.appendChild(cardsListFragment);
