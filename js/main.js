import { createObjects } from './data.js';
import { renderCard } from './card.js';
import { disableForm, enableForm } from './form.js';

const COUNT = 8;
const objects = createObjects(COUNT);
renderCard(objects[0]);

disableForm();
enableForm();
