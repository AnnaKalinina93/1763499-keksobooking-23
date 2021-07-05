import { getValidation, reset, openError, openWindow, returnOriginalState } from './form.js';
import { disableForm, enableForm } from './page.js';
import { initailizeMap, getMainPinIcon, getMarkers } from './map.js';
import { getData, sendData } from './api.js';
import { showAlert } from './utils.js';
import { clickType, clickGuests, clickPrice, clickRooms, filterCards } from './filter.js';
disableForm();

initailizeMap(() => {
  enableForm();
  getMainPinIcon();
  getData(
    (cards) => {
      getMarkers(cards.slice(0, 10));
      clickType(() => filterCards(cards));
      clickPrice(()=> filterCards(cards));
      clickRooms(() => filterCards(cards));
      clickGuests(() => filterCards(cards));
      //clickFeatures(()=> filterCards(cards));
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


