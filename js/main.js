/* eslint-disable arrow-body-style */
/* eslint-disable id-length */
/* eslint-disable no-unused-vars */
const getRandomNumber = (min, max) => {
  if (max > min && max >=0 && min >=0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min+1)) + min;
  // взято с источника http://surl.li/vdrf
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};

const getRandomFractionalNumber = (min, max ,numberAfterDecimalPoint = 5) => {
  if (max > min && max >=0 && min >=0) {
    const intermediateValue = Math.random() * (max - min+1) + min;
    return Number(intermediateValue.toFixed(numberAfterDecimalPoint));
  }
  return 'Задайте верные параметры функции.Число "от" должно быть меньше числа "до" и оба больше нуля';
};

// функция генерирующая случайный эллемент массива

const getRandomArrayElement = (array)  => array[getRandomNumber(0,array.length-1)];

//создание подъобъектов

const IMAGE_ADRESS = [
  'img/avatars/user01.png',
  'img/avatars/user02.png',
  'img/avatars/user03.png',
  'img/avatars/user04.png',
  'img/avatars/user05.png',
  'img/avatars/user06.png',
  'img/avatars/user07.png',
  'img/avatars/user08.png',
] ;

const createAuthor =() => {
  return {
    avatar: getRandomArrayElement(IMAGE_ADRESS),
  };
};

const TITLES = [
  'One-room apartment',
  '2 bedroom apartment',
  '3-room apartment',
  'A room in a communal apartment',
  'Residential 2-storey house',
  'Tanhouse',
  'Residential one-storey house',
];
const createTitle = () =>  getRandomArrayElement(TITLES);
const MIN_X=35.65;
const MAX_X=35.7;
const MIN_Y=139.7;
const MAX_Y=139.8;
const createAddress =() => [
  getRandomFractionalNumber(MIN_X,MAX_X),
  getRandomFractionalNumber(MIN_Y,MAX_Y),
];
const MIN_PRICE=0;
const MAX_PRICE = 10000000;
const createPrice = () => getRandomNumber(MIN_PRICE, MAX_PRICE);
const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const createType = () => getRandomArrayElement(TYPES);
const MIN_ROOMS=1;
const MAX_ROOMS=10;
const createRooms = () => getRandomNumber(MIN_ROOMS, MAX_ROOMS);
const MIN_GUETS=1;
const MAX_GUETS=10;
const createGuests = () => getRandomNumber(MIN_GUETS, MAX_GUETS);
const CHECKTIMES = [
  '12:00', '13:00', '14:00',
];
const createCheckIn = () => getRandomArrayElement(CHECKTIMES);
const createCheckOut = () => getRandomArrayElement(CHECKTIMES);
const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

// функция по возвращению массива со случайным количесвом элементов
const getRandomArray = (array) => {
  const randomArray = [];
  for (let i = 0; i < getRandomNumber(0, array.length); i++) {
    randomArray[i] =getRandomArrayElement[array];
    if (randomArray[i] !== randomArray[i-1]) {
      randomArray[i];
    }
  }
  return randomArray;
};

const createFeatures = () => getRandomArray(FEATURES);
const DESCRIPTIONS = [
  'Bright apartment with windows on the sunny side',
  'Huge apartment with a balcony',
  'House with a garden',
  'Located not far from the metro',
];
const createDescription = () => getRandomArrayElement(DESCRIPTIONS);
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const createPhotos = () => getRandomArray(PHOTOS);
const createLocation = () => {
  return {
    lat: getRandomFractionalNumber(MIN_X,MAX_X) ,
    lng: getRandomFractionalNumber(MIN_Y, MAX_Y),
  };
};


// создание объекта Offer

const createOffer = () => {
  return {
    title : createTitle() ,
    adress: createAddress() ,
    price: createPrice() ,
    type: createType() ,
    rooms: createRooms() ,
    guests: createGuests() ,
    checkin: createCheckIn() ,
    checkout: createCheckOut() ,
    features: createFeatures() ,
    description: createDescription() ,
    photos: createPhotos() ,
  };
};


// наполнение одного элемента массива в виде объекта

const createObject = () => {
  return {
    author: createAuthor() ,
    offer: createOffer() ,
    location: createLocation() ,
  };
};

// создание массива из 10 объектов

const dataGeneration = Array(10).fill(createObject());

