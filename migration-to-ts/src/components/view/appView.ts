import News from './news/news';
import Sources from './sources/sources';
import { NewsItem, NewsItems, NewsSources, NewsSource } from '../../types/index';

export class AppView {
    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsItems): void {
        const values: NewsItem[] = data?.articles || [];
        this.news.draw(values);
    }

    drawSources(data: NewsSources): void {
        const values: NewsSource[] = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;
