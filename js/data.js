/* eslint-disable id-length */
import { getRandomNumber,
  getRandomFractionalNumber,
  getRandomArrayElement,
  getRandomArray
} from './utils.js';

// входные данные

const TITLES = [
  'One-room apartment',
  '2 bedroom apartment',
  '3-room apartment',
  'A room in a communal apartment',
  'Residential 2-storey house',
  'Tanhouse',
  'Residential one-storey house',
];
const MIN_X = 35.655;
const MAX_X = 35.7;
const MIN_Y = 139.7;
const MAX_Y = 139.8;
const MIN_PRICE = 0;
const MAX_PRICE = 10000000;
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const MIN_ROOMS = 1;
const MAX_ROOMS = 10;
const MIN_GUETS = 1;
const MAX_GUETS = 10;
const CHECKTIMES = [
  '12:00', '13:00', '14:00',
];
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];
const DESCRIPTIONS = [
  'Bright apartment with windows on the sunny side',
  'Huge apartment with a balcony',
  'House with a garden',
  'Located not far from the metro',
];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// создание объекта для ондого элемента массива

const createObject = (index) => {
  const avatar = {
    avatar: `img/avatars/user0${index+1}.png`,
  };
  const features = getRandomArray(FEATURES);
  const checkin = getRandomArrayElement(CHECKTIMES);
  const checkout = checkin;
  const description = getRandomArrayElement(DESCRIPTIONS);
  const photos = getRandomArray(PHOTOS);
  const title = getRandomArrayElement(TITLES);
  const type = getRandomArrayElement(TYPES);
  const rooms = getRandomNumber(MIN_ROOMS, MAX_ROOMS);
  const guests = getRandomNumber(MIN_GUETS, MAX_GUETS);
  const price = getRandomNumber(MIN_PRICE, MAX_PRICE);
  const location = {
    lat: getRandomFractionalNumber(MIN_X, MAX_X),
    lng: getRandomFractionalNumber(MIN_Y, MAX_Y),
  };
  const address = [location.lat, location.lng].join(', ');
  return {
    author: avatar,
    offer: {
      title,
      address,
      price,
      type,
      rooms,
      guests,
      checkin,
      checkout,
      features,
      description,
      photos,
    },
    location,
  };
};

// функция по созданию массива данных

const createObjects = (n) => {
  const newArray = [];
  for (let i = 0; i < n; i++) {
    newArray.push(createObject(i));
  }
  return newArray;
};
export {createObjects};
