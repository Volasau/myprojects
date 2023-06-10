export interface NewsItem {
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source: { name: string; id: string };
}

export interface NewsItems {
    status: string;
    totalResults?: number;
    articles?: NewsItem[];
}

export interface NewsSource {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface NewsSources {
    status: string;
    sources?: NewsSource[];
}
