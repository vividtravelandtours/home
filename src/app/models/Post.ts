import { IContent } from "./Content";

export interface IPost {
    status: string,
    updatedAt: string,
    createdAt: string,
    id: string,
    title: string,
    content: IContent
}