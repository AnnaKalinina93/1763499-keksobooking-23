import { getValidation, reset } from './form.js';
import { disableForm, enableForm } from './page.js';
import { initailizeMap, getMainPinIcon } from './map.js';
import { getData, sendData } from './api.js';
disableForm();

initailizeMap(() => {
  enableForm();
  getMainPinIcon();
  getData();
  getValidation();

});
sendData();
reset();
