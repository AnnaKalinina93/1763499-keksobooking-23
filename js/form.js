/* eslint-disable id-length */
const adForm = document.querySelector('.ad-form');
const fieldsetsForm = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.querySelectorAll('select');
const fieldsetMap = mapFilters.querySelector('fieldset');

const disableForm = (() => {
  adForm.classList.add('ad-form--disabled');
  for (let i = 0; i < fieldsetsForm.length; i++) {
    fieldsetsForm[i].setAttribute('disabled', 'disabled');
  }
  mapFilters.classList.add('map__filters--disabled');
  for (let i = 0; i < selects.length; i++) {
    selects[i].setAttribute('disabled', 'disabled');
  }
  fieldsetMap.setAttribute('disabled', 'disabled');
});

const enableForm = (() => {
  adForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < fieldsetsForm.length; i++) {
    fieldsetsForm[i].removeAttribute('disabled');
  }
  mapFilters.classList.remove('map__filters--disabled');
  for (let i = 0; i < selects.length; i++) {
    selects[i].removeAttribute('disabled');
  }
  fieldsetMap.removeAttribute('disabled');
});


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

const type = document.querySelector('#type');
const MIN_PRICE = [
  0,
  1000,
  3000,
  5000,
  10000,
];
let minPrice = 0;
const onTypeChange = () => {
  for (let i = 0; i < type.options.length; i++) {
    if (type.options.selectedIndex === i) { minPrice = MIN_PRICE[i]; }
  }
};


//валидация цен

const MAX_PRICE = 1000000;
const price = document.querySelector('#price');
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

const getChangeTimeIn = () => {
  const currentIndex = timeIn.selectedIndex;
  const timesOut = timeOut.options;
  for (let i = 0; i < timesOut.length; i++) {
    if (i === currentIndex) {
      timesOut[i].selected = true;
    }
  }
};
const getChangeTimeOut = () => {
  const currentIndex = timeOut.selectedIndex;
  const timesIn = timeIn.options;
  for (let i = 0; i < timesIn.length; i++) {
    if (i === currentIndex) {
      timesIn[i].selected = true;
    }
  }
};


const getValidation = () => {
  adFormLabel.addEventListener('input', onTitleInput);
  type.addEventListener('change', onTypeChange);
  price.addEventListener('input', onPriceInput);
  roomNumber.addEventListener('change', onRoomChange);
  timeIn.addEventListener('change', getChangeTimeIn);
  timeOut.addEventListener('change', getChangeTimeOut);
};

export { disableForm, enableForm, getValidation };
