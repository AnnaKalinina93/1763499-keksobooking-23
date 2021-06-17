/* eslint-disable id-length */
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
  const title = cardElement.querySelector('.popup__title').textContent = object.offer.title;
  const address = cardElement.querySelector('.popup__text--address').textContent = object.offer.address;
  const price =cardElement.querySelector('.popup__text--price').textContent = `${object.offer.price} ₽/ночь`;
  const typeElement = () => {
    if (object.offer.type === 'palace') { return 'Дворец';}
    if (object.offer.type === 'flat') {return 'Квартира';}
    if (object.offer.type === 'house') {return 'Дом';}
    if (object.offer.type === 'bungalow') {return 'Бунгало';}
    if (object.offer.type === 'hotel') {return 'Отель';}
  };
  const type = cardElement.querySelector('.popup__type').textContent = typeElement();
  const capacity = cardElement.querySelector('.popup__text--capacity').textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
  const textTime = cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;

  //список удобств

  const featureListElement = document.querySelector('.popup__features');
  const features = object.offer.features;
  const modifiers = features.map((feature) => `popup__feature--${feature}`);
  featureListElement.querySelectorAll('.popup__feature')
    .forEach((item) => {
      const modifier = item.classList[1];

      if( !modifiers.includes(modifier) ) {
        item.remove();
      }
    });

  const description = cardElement.querySelector('.popup__description').textContent = object.offer.description;

  const arrayPhotos = object.offer.photos;
  arrayPhotos.forEach ((item) => {
    const photoElement = cardElement.querySelector('.popup__photos')
      .querySelector('.popup__photo')
      .cloneNode(true);
    photoElement.src = item;
    if (photoElement.src === '') {
      photoElement.hide();
    } });

  const avatar = cardElement.querySelector('.popup__avatar')
    .src = object.author.avatar;

  if ( title.textContent === '') { title.hide();}
  if ( address.textContent === ''){address.hide();}
  if ( price.textContent === ''){price.hide();}
  if ( type.textContent === ''){type.hide();}
  if ( capacity.textContent === ''){capacity.hide();}
  if ( textTime.textContent === ''){textTime.hide();}
  if ( description.textContent === ''){description.hide();}
  if ( avatar.textContent === ''){avatar.hide();}

  cardsListFragment.appendChild(cardElement);
});

map.appendChild(cardsListFragment);
