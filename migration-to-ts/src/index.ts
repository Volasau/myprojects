import App from './components/app/app';
import AppController from './components/controller/controller';
import { AppView } from './components/view/appView';
import './global.css';

const controller = new AppController();
const view = new AppView();
const app = new App(controller, view);
app.start();
