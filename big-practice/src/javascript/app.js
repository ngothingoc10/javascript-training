console.log('huhu');
import {Controller} from './controllers/book.controller';
import {Model} from './models/book.model';
import {View} from './views/book.view';

console.log('hihi');
const controller = new Controller(new Model(), new View());
