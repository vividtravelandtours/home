import { IMedia } from "./Media";

export interface IBrandInfo {
    status: string,
    updatedAt: string,
    createdAt: string,
    id: string,
    logo: IMedia,
    header: string,
    subHeader: string,
    biography: string,
    emailAddress: string[]
}