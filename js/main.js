import { getValidation, reset, openError, openWindow, returnOriginalState } from './form.js';
import { disableForm, enableForm } from './page.js';
import { initailizeMap, getMainPinIcon, getMarkers } from './map.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';

disableForm();

initailizeMap(() => {
  enableForm();
  getMainPinIcon();
  getData(
    (cards) => getMarkers(cards),
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


