import { ITag } from './ITag';

export interface IArticle {
    id: number;
    title: string;
    firstParagraph: string;
    body: string;
    imageUrl: string;
    tags: ITag[];

    getTagsString(): string;
}