import { IMedia } from "./Media";

export interface IPopular {
    status: string,
    updatedAt: string,
    createdAt: string,
    id: string,
    bannerImage: IMedia,
    promoText: string,
    tourPackage: string,
    extraInfo: string,
    tourPackageOption: string,
    description: string
}