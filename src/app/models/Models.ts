import { IBrandInfo } from "./BrandInfo";
import { IPost } from "./Post";
import { IPopular } from "./Popular";
import { ITestimonial } from "./Testimonial";
import { ISocial } from "./Social";

export interface IModels {
    brandSiteSystems: IBrandInfo[],
    postUpdates: IPost[],
    topDestinations: IPopular[],
    testimonials: ITestimonial[],
    socialSites: ISocial[]
}