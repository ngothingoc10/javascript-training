import {CreateBookController} from './controllers/create-book.controller';
import {Model} from './models/book.model';
import {CreateBookView} from './views/create-book.view';

const createBookController = new CreateBookController(new Model(), new CreateBookView());
