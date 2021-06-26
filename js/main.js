import { createObjects } from './data.js';
import { renderCard } from './card.js';
import { getValidation } from './form.js';
import { disableForm, enableForm } from './page.js';
import { initailizeMap } from './map.js';
const COUNT = 8;
const objects = createObjects(COUNT);


disableForm();
if (initailizeMap()) { enableForm(); }
getValidation();


