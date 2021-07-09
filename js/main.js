import { getValidation, reset, openError, openWindow, returnOriginalState } from './form.js';
import { disableForm, enableForm } from './page.js';
import { initailizeMap, getMainPinIcon, getMarkers } from './map.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';

import { updateMarkers, mapFiltersClick, resetFilter, clickReset } from './filter.js';
import { debounce } from './utils/debounce.js';

const RERENDER_DELAY = 500;
disableForm();

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
      getValidation();
      sendData(
        () => {
          openWindow();
          returnOriginalState();
          resetFilter(cards);
        },
        () => openError());
      clickReset(cards);
    },
    () => {
      showAlert('При загрузке данных с сервера произошла ошибка . Попробуйте ещё раз');
      getValidation();
      sendData(
        () => {
          openWindow();
          returnOriginalState();
        },
        () => openError());
      reset();
    });

});


