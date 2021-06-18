import {createObjects} from './data.js';
import{renderCard} from './popup.js';

const COUNT = 8 ;
const arrayObjects = createObjects(COUNT);

renderCard(arrayObjects[0]);
