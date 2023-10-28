import { ServeNewsService } from './serve-news.service';
export declare class ServeNewsController {
    private readonly news;
    constructor(news: ServeNewsService);
    getArticles(): Promise<{
        id: number;
        title: string;
        description: string;
        content: string;
        createdAt: Date;
        imageUrl: string;
    }[]>;
    getArticleById(id: number): Promise<{
        id: number;
        title: string;
        description: string;
        content: string;
        createdAt: Date;
        imageUrl: string;
    }>;
}
