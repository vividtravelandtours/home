import { IBrandInfo } from "./BrandInfo";
import { IPost } from "./Post";
import { IPopular } from "./Popular";
import { ITestimonial } from "./Testimonial";

export interface IModels {
    brandSiteSystems: IBrandInfo[],
    postUpdates: IPost[],
    topDestinations: IPopular[],
    testimonials: ITestimonial[]
}