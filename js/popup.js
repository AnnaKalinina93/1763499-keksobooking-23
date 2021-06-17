/* eslint-disable id-length */
import { createObjects } from './data.js';
const renderingcards = (count) => {
  const map = document.querySelector('.map')
    .querySelector('#map-canvas');
  const cardTemplate = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const cards = createObjects(count);
  const cardsListFragment = document.createDocumentFragment();
  cards.forEach((object) => {
    const cardElement = cardTemplate.cloneNode(true);
    const title = cardElement.querySelector('.popup__title');
    title.textContent = object.offer.title;
    const address = cardElement.querySelector('.popup__text--address');
    address.textContent = object.offer.address;
    const price = cardElement.querySelector('.popup__text--price');
    price.textContent = `${object.offer.price} ₽/ночь`;

    const TypeNameMap = {
      palace: 'Дворец',
      flat: 'Квартира',
      house: 'Дом',
      bungalow: 'Бунгало',
      hotel: 'Отель',
    };

    const type = cardElement.querySelector('.popup__type');
    type.textContent = TypeNameMap[object.offer.type];
    const capacity = cardElement.querySelector('.popup__text--capacity');
    capacity.textContent = `${object.offer.rooms} комнаты для ${object.offer.guests} гостей`;
    const textTime = cardElement.querySelector('.popup__text--time');
    textTime.textContent = `Заезд после ${object.offer.checkin}, выезд до ${object.offer.checkout}`;

    //список удобств

    const featureListElement = cardElement.querySelector('.popup__features');
    featureListElement.querySelectorAll('.popup__feature')
      .forEach((item) => item.remove());
    const features = object.offer.features;
    features.forEach((item) => {
      const listElement = document.createElement('li');
      listElement.classList.add('popup__feature');
      listElement.classList.add(`popup__feature--${item}`);
      featureListElement.appendChild(listElement);
    });

    const description = cardElement.querySelector('.popup__description');
    description.textContent = object.offer.description;

    const arrayPhotos = object.offer.photos;
    const photoElements = cardElement.querySelector('.popup__photos');
    let photoElement = photoElements.querySelector('.popup__photo');
    arrayPhotos.forEach((item) => {
      photoElement.src = item;
      photoElements.appendChild(photoElement);
      photoElement = photoElements.querySelector('.popup__photo')
        .cloneNode(true);
      if (photoElement.src === '') {
        photoElement.hide();
      }
    });
    const avatar = cardElement.querySelector('.popup__avatar');
    avatar.src = object.author.avatar;

    if (!title.textContent) {
      title.hide();
    }
    if (!address.textContent) {
      address.hide();
    }
    if (!price.textContent) {
      price.hide();
    }
    if (!type.textContent) {
      type.hide();
    }
    if (!capacity.textContent) {
      capacity.hide();
    }
    if (!textTime.textContent) {
      textTime.hide();
    }
    if (!description.textContent) {

      description.hide();
    }
    if (avatar.src.textContent === '') {
      avatar.hide();
    }

    cardsListFragment.appendChild(cardElement);
  });

  map.appendChild(cardsListFragment);
};

export { renderingcards };
