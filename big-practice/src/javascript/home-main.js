import {HomeController} from './controllers/home.controller';
import {Model} from './models/book.model';
import {HomeView} from './views/home.view';

const homeController = new HomeController(new Model(), new HomeView());
