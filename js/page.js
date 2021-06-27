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

export {disableForm, enableForm };
