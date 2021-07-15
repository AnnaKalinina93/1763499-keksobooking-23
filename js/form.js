import { returnMainPinIcon } from './map.js';
import { resetFilter } from './filter.js';
import { resetPhoto } from './avatar.js';

const MIN_LABEL_LENGTH = 30;
const MAX_LABEL_LENGTH = 100;
const adFormLabel = document.querySelector('#title');
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
const MAX_PRICE = 1000000;
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const capacitys = capacity.options;
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const formSubmit = document.querySelector('.ad-form');
const success = document.querySelector('#success')
  .content
  .querySelector('.success')
  .cloneNode(true);
const errorTemplate = document.querySelector('#error')
  .content
  .querySelector('.error')
  .cloneNode(true);

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

const onTypeChange = (event) => {
  const newValue = event.target.value;
  minPrice = TypeToMinPriceMap[newValue];
  price.placeholder = TypeToMinPriceMap[newValue];
  price.min = TypeToMinPriceMap[newValue];
};

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

Array.from(capacitys).forEach((element) => {
  if (!element.selected) { element.disabled = true; }
});
const onRoomChange = () => {
  const currentValue = Number(roomNumber.value);
  if (currentValue !== 100) {
    Array.from(capacitys).forEach((element) => {
      if (Number(element.value) > currentValue) {
        element.selected = false;
        element.disabled = true;
      } else {
        element.disabled = false;
        element.selected = true;
      }
    });
    capacitys[capacitys.length - 1].disabled = true;
    capacitys[capacitys.length - 1].selected = false;
  }
  if (currentValue === 100) {
    Array.from(capacitys).forEach((element) => {
      element.disabled = true;
      element.selected = false;
    });
    capacitys[capacitys.length - 1].disabled = false;
    capacitys[capacitys.length - 1].selected = true;
  }
};

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

const returnOriginalState = () => {
  formSubmit.reset();
  returnMainPinIcon();
  resetPhoto();
};

const onDocumentSuccessEscapePressed = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeWindow();
  }
};
const onDocumentSuccessClick = () => {
  closeWindow();
};
function closeWindow() {
  success.remove();
  document.removeEventListener('keydown', onDocumentSuccessEscapePressed);
  document.removeEventListener('click', onDocumentSuccessClick);
}
const openWindow = () => {
  document.body.appendChild(success);
  document.addEventListener('keydown', onDocumentSuccessEscapePressed);
  document.addEventListener('click', onDocumentSuccessClick);
};

const onDocumentErrorEscapePressed = (evt) => {
  if (evt.key === 'Escape' || evt.key === 'Esc') {
    evt.preventDefault();
    closeError();
  }
};
const onDocumentErrorClick = () => {
  closeError();
};

function closeError() {
  errorTemplate.remove();
  document.removeEventListener('keydown', onDocumentErrorEscapePressed);
  document.removeEventListener('click', onDocumentErrorClick);
}
const openError = () => {
  document.body.appendChild(errorTemplate);
  const errorButton = document.querySelector('.error__button');
  document.addEventListener('keydown', onDocumentErrorEscapePressed);
  document.addEventListener('click', onDocumentErrorClick);
  errorButton.addEventListener('click', () => errorTemplate.remove());
};

const reset = () => {
  const buttonReset = document.querySelector('.ad-form__reset');
  buttonReset.addEventListener('click', () => {
    returnOriginalState();
    resetFilter();
  });
};
export { getValidation, reset, openWindow, returnOriginalState, openError };
