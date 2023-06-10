import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { NewsItems } from '../../types/index';

class App {
    constructor(private controller: AppController, private view: AppView) {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const source = document.querySelector('.sources') as HTMLElement;
        if (source) {
            source.addEventListener('click', (e) =>
                this.controller.getNews(e, (data) => this.view.drawNews((data as unknown) as NewsItems))
            );
        }
        this.controller.getSources((data) => this.view.drawSources((data as unknown) as NewsItems));
    }
}

export default App;
