import { IMedia } from "./Media";

export interface ITestimonial {
    status: string,
    updatedAt: string,
    createdAt: string,
    id: string,
    picture: IMedia,
    name: string,
    tourDestination: string,
    review: string,
    date: string
}

export interface INewTestimony {
    name: string,
    tourDestination: string,
    review: string,
    date: string
}