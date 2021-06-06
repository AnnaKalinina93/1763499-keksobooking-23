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

const creatAuthor =() => {
  return {
    avatar: getRandomArrayElement(IMAGE_ADRESS),
  };
};

const TITLE = [
  'One-room apartment',
  '2 bedroom apartment',
  '3-room apartment',
  'A room in a communal apartment',
  'Residential 2-storey house',
  'Tanhouse',
  'Residential one-storey house',
];
const creatTitle = () =>  getRandomArrayElement(TITLE);

const creatAddress =() => [
  getRandomFractionalNumber(35.817,35.830),
  getRandomFractionalNumber(139.740,139.930),
];
const creatPrice = () => getRandomNumber(0, 10000000);
const TYPE = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];
const creatType = () => getRandomArrayElement(TYPE);
const creatRooms = () => getRandomNumber(0, 20);
const creatGuests = () => getRandomNumber(0, 20);
const CHECKTIME = [
  '12:00', '13:00', '14:00',
];
const creatCheckIn = () => getRandomArrayElement(CHECKTIME);
const creatCheckOut = () => getRandomArrayElement(CHECKTIME);
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
  for (let i = 0; i < getRandomNumber (0, array.length); i++) {
    randomArray[i] =getRandomArrayElement[array];
    if (randomArray[i] === randomArray[i-1]) {
      getRandomArray ();
    }
    randomArray[i];
  }
  return randomArray;
};

const creatFeatures = () => getRandomArray(FEATURES);
const DESCRIPTION = [
  'Bright apartment with windows on the sunny side',
  'Huge apartment with a balcony',
  'House with a garden',
  'Located not far from the metro',
];
const creatDescription = () => getRandomArrayElement(DESCRIPTION);
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];
const creatPhotos = () => getRandomArray(PHOTOS);
const creatLocation = () => {
  return {
    lat: getRandomFractionalNumber(35.65,35.7) ,
    lng: getRandomFractionalNumber(139.7, 139.8),
  };
};


// создание объекта Offer

const creatOffer = () => {
  return {
    title : creatTitle() ,
    adress: creatAddress() ,
    price: creatPrice() ,
    type: creatType() ,
    rooms: creatRooms() ,
    guests: creatGuests() ,
    checkin: creatCheckIn() ,
    checkout: creatCheckOut() ,
    features: creatFeatures() ,
    description: creatDescription() ,
    photos: creatPhotos() ,
  };
};


// наполнение одного элемента массива в виде объекта

const creatObject = () => {
  return {
    author: creatAuthor() ,
    offer: creatOffer() ,
    location: creatLocation() ,
  };
};

// создание массива из 10 объектов

const dataGeneration = [
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
  creatObject(),
];

dataGeneration;

