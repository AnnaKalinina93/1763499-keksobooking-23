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

export { disableForm, enableForm };

//валидация заголовка

const MIN_LABEL_LENGTH = 30;
const MAX_LABEL_LENGTH = 100;

const adFormLabel = document.querySelector('#title');

adFormLabel.addEventListener('input', () => {
  const valueLength = adFormLabel.value.length;

  if (valueLength < MIN_LABEL_LENGTH) {
    adFormLabel.setCustomValidity(`Ещё ${MIN_LABEL_LENGTH - valueLength} символов.`);
  } else if (valueLength > MAX_LABEL_LENGTH) {
    adFormLabel.setCustomValidity(`Удалите лишние ${valueLength - MAX_LABEL_LENGTH} символы.`);
  } else {
    adFormLabel.setCustomValidity('');
  }

  adFormLabel.reportValidity();
});

// тип жилья

const type = document.querySelector('#type');
let minPrice = 0;
type.addEventListener('click', () => {
  if (type.value === 'bungalow') {
    minPrice = 0;
  }
  if (type.value === 'flat') {
    minPrice = 1000;
  }
  if (type.value === 'hotel') {
    minPrice = 3000;
  }
  if (type.value === 'house') {
    minPrice = 5000;
  }
  if (type.value === 'palace') {
    minPrice = 10000;
  }
});

//валидация цен

const MAX_PRICE = 1000000;
const price = document.querySelector('#price');

price.addEventListener('input', () => {
  const valuePrice = price.value;
  if (valuePrice < minPrice) {
    price.setCustomValidity(`Минимальная цена за ночь  ${minPrice}`);
  }
  else if (valuePrice > MAX_PRICE) {
    price.setCustomValidity(`Укажите цену ниже ${MAX_PRICE}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
});

// валидация кол-ва комнат и гостей

const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacitys = capacity.querySelectorAll('option');
capacitys[0].setAttribute('disabled', 'disabled');
capacitys[1].setAttribute('disabled', 'disabled');
capacitys[3].setAttribute('disabled', 'disabled');

roomNumber.addEventListener('click', () => {

  if (roomNumber.value === '1') {
    capacitys[0].setAttribute('disabled', 'disabled');
    capacitys[1].setAttribute('disabled', 'disabled');
    capacitys[2].removeAttribute('disabled');
    capacitys[3].setAttribute('disabled', 'disabled');
    capacitys[2].setAttribute('selected', true);
  }

  if (roomNumber.value === '2') {
    capacitys[0].setAttribute('disabled', 'disabled');
    capacitys[1].removeAttribute('disabled');
    capacitys[2].removeAttribute('disabled');
    capacitys[3].setAttribute('disabled', 'disabled');
    capacitys[2].setAttribute('selected', true);
  }

  if (roomNumber.value === '3') {
    capacitys[0].removeAttribute('disabled');
    capacitys[1].removeAttribute('disabled');
    capacitys[2].removeAttribute('disabled');
    capacitys[3].setAttribute('disabled', 'disabled');
    capacitys[2].setAttribute('selected', true);
  }

  if (roomNumber.value === '100') {
    capacitys[0].setAttribute('disabled', 'disabled');
    capacitys[1].setAttribute('disabled', 'disabled');
    capacitys[2].setAttribute('disabled', 'disabled');
    capacitys[3].removeAttribute('disabled');
    capacitys[3].setAttribute('selected', true);
  }
  capacitys[2].removeAttribute('selected');
  capacitys[3].removeAttribute('selected');

});

//выбор форм заезда и выезда

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const timeOutOptions = timeOut.querySelectorAll('option');
const timeInOptions = timeIn.querySelectorAll('option');

timeIn.addEventListener('click', () => {
  for (let i = 0; i < timeOutOptions.length; i++) {
    if (timeIn.value !== timeOutOptions[i].value ) {
      timeOutOptions[i].setAttribute('disabled', 'disabled');
    } else {
      timeOutOptions[i].removeAttribute('disabled');
      timeOutOptions[i].setAttribute('selected', true);
    }
    timeOutOptions[i].removeAttribute('selected');
  }
});
/*
timeOut.addEventListener('click', () => {
  for (let i = 0; i < timeInOptions.length; i++) {
    if (timeOut.value !== timeInOptions[i].value ) {
      timeInOptions[i].setAttribute('disabled', 'disabled');
    } else {
      timeInOptions[i].removeAttribute('disabled');
      timeInOptions[i].setAttribute('selected', true);
    }
    timeInOptions[i].removeAttribute('selected');
  }
});
*/

