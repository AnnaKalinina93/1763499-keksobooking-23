/* eslint-disable id-length */


//валидация заголовка

const MIN_LABEL_LENGTH = 30;
const MAX_LABEL_LENGTH = 100;

const adFormLabel = document.querySelector('#title');
const onTitleInput = () => {
  const valueLength = adFormLabel.value.length;

  if (valueLength < MIN_LABEL_LENGTH) {
    adFormLabel.setCustomValidity(`Ещё ${MIN_LABEL_LENGTH - valueLength} символов.`);
  } else if (valueLength > MAX_LABEL_LENGTH) {
    adFormLabel.setCustomValidity(`Удалите лишние ${valueLength - MAX_LABEL_LENGTH} символы.`);
  } else {
    adFormLabel.setCustomValidity('');
  }

  adFormLabel.reportValidity();
};


//зависимость типа жилья от цены

const TypeToMinPriceMap = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000,
};
const type = document.querySelector('#type');
const price = document.querySelector('#price');
let minPrice = 0;
const onTypeChange = (event) => {
  const newValue = event.target.value;
  for (const key in TypeToMinPriceMap) {
    if (key === newValue) {
      minPrice = TypeToMinPriceMap[key];
      price.placeholder = TypeToMinPriceMap[key];
      price.min = TypeToMinPriceMap[key];
    }
  }
};

//валидация цен

const MAX_PRICE = 1000000;

const onPriceInput = () => {
  const valuePrice = price.value;
  if (valuePrice < minPrice) {
    price.setCustomValidity(`Минимальная цена за ночь  ${minPrice}`);
  }
  else if (valuePrice > MAX_PRICE) {
    price.setCustomValidity(`Укажите цену ниже ${MAX_PRICE}`);
  }
  else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};


// валидация кол-ва комнат и гостей

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacitys = capacity.options;
for (let i = 0; i < capacitys.length; i++) {
  if (!capacitys[i].selected) { capacitys[i].disabled = true; }
}
const onRoomChange = () => {
  const currentValue = Number(roomNumber.value);
  if (currentValue !== 100) {
    for (let i = 0; i < capacitys.length; i++) {
      if (Number(capacitys[i].value) > currentValue) {
        capacitys[i].selected = false;
        capacitys[i].disabled = true;
      } else {
        capacitys[i].disabled = false;
        capacitys[i].selected = true;
      }
    }
    capacitys[capacitys.length - 1].disabled = true;
    capacitys[capacitys.length - 1].selected = false;
  }
  if (currentValue === 100) {
    for (let i = 0; i < capacitys.length - 1; i++) {
      capacitys[i].disabled = true;
      capacitys[i].selected = false;
    }
    capacitys[capacitys.length - 1].disabled = false;
    capacitys[capacitys.length - 1].selected = true;
  }
};

//вылидация времени

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const onTimeChange = (event) => {
  const newValue = event.target.value;
  timeIn.value = newValue;
  timeOut.value = newValue;
};

const getValidation = () => {
  adFormLabel.addEventListener('input', onTitleInput);
  type.addEventListener('change', onTypeChange);
  price.addEventListener('input', onPriceInput);
  roomNumber.addEventListener('change', onRoomChange);
  timeIn.addEventListener('change', onTimeChange);
  timeOut.addEventListener('change', onTimeChange);
};

export { getValidation };
