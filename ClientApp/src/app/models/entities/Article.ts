import { IArticle } from './IArticle';
import { ITag } from './ITag';

export class Article implements IArticle {
    id: number;    
    title: string;
    firstParagraph: string;
    body: string;
    imageUrl: string;
    tags: ITag[];

    constructor(article: IArticle) {
        this.id = article.id;
        this.title = article.title;
        this.firstParagraph = article.firstParagraph;
        this.body = article.body;
        this.imageUrl = article.imageUrl;
        this.tags = article.tags;
    }

    public getTagsString(): string {
        if (this.tags && this.tags.length > 0){
            return this.tags
                .map(t => t.title)
                .join(", ");
        }
        else {
            return "";
        }
    }
}