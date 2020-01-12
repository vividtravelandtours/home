import { IMedia } from "./Media";

export interface ISocial {
    status: string,
    updatedAt: string,
    createdAt: string,
    id: string,
    icon: IMedia,
    alias: string,
    linkAddress: string
}