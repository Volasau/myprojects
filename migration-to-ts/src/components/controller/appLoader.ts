import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '9e3d958f2fe14cb3bcbb741514245db5', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
