import { getValidation, reset, openError, openWindow, returnOriginalState } from './form.js';
import { disableForm, enableForm } from './page.js';
import { initailizeMap, getMainPinIcon, getMarkers } from './map.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';
import { updateMarkers, mapFiltersClick } from './filter.js';
import {debounce} from './utils/debounce.js';
disableForm();
const RERENDER_DELAY = 500;
initailizeMap(() => {
  enableForm();
  getMainPinIcon();
  getData(
    (cards) => {
      getMarkers(cards.slice(0, 10));
      mapFiltersClick(debounce(
        () => updateMarkers(cards),
        RERENDER_DELAY,
      ));
    },
    () => showAlert('При загрузке данных с сервера произошла ошибка . Попробуйте ещё раз'));
  getValidation();
  sendData(
    () => {
      openWindow();
      returnOriginalState();
    },
    () => openError());
  reset();
});


