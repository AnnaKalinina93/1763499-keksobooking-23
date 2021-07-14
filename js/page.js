const adForm = document.querySelector('.ad-form');
const fieldsetsForm = adForm.querySelectorAll('fieldset');
const mapFilters = document.querySelector('.map__filters');
const selects = mapFilters.querySelectorAll('select');
const fieldsetMap = mapFilters.querySelector('fieldset');

const disableForm = (() => {
  adForm.classList.add('ad-form--disabled');
  Array.from(fieldsetsForm).forEach((element) => element.setAttribute('disabled', 'disabled'));
  mapFilters.classList.add('map__filters--disabled');
  Array.from(selects).forEach((element) => element.setAttribute('disabled', 'disabled'));
  fieldsetMap.setAttribute('disabled', 'disabled');
});

const enableForm = (() => {
  adForm.classList.remove('ad-form--disabled');
  Array.from(fieldsetsForm).forEach((element) => element.removeAttribute('disabled'));
  mapFilters.classList.remove('map__filters--disabled');
  Array.from(selects).forEach((element) => element.removeAttribute('disabled'));
  fieldsetMap.removeAttribute('disabled');
});

export { disableForm, enableForm };
