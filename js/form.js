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
