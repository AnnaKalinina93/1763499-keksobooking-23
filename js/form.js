/* eslint-disable id-length */

const disableForm = (() => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  const fieldsetsForm = adForm.querySelectorAll('fieldset');
  for (let i = 0; i < fieldsetsForm.length; i++) {
    fieldsetsForm[i].setAttribute('disabled', 'disabled');
  }
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');
  const selects = mapFilters.querySelectorAll('select');
  for (let i = 0; i < selects.length; i++) {
    selects[i].setAttribute('disabled', 'disabled');
  }
  const fieldsetMap = mapFilters.querySelector('fieldset');
  fieldsetMap.setAttribute('disabled', 'disabled');

});

const enableForm = (() => {
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  const fieldsetsForm = adForm.querySelectorAll('fieldset');
  for (let i = 0; i < fieldsetsForm.length; i++) {
    fieldsetsForm[i].removeAttribute('disabled');
  }
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('map__filters--disabled');
  const selects = mapFilters.querySelectorAll('select');
  for (let i = 0; i < selects.length; i++) {
    selects[i].removeAttribute('disabled');
  }
  const fieldsetMap = mapFilters.querySelector('fieldset');
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

//валидация цен

const MAX_PRICE = 1000000;
const price = document.querySelector('#price');

price.addEventListener('input', () => {
  const valuePrice = price.value;

  if (valuePrice > MAX_PRICE) {
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
