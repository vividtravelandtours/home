import { request } from "graphql-request";
import { brandInfoQuery } from "./Query/BrandInfoQuery";
import { IModels } from "../models/Models";
import { postQuery } from "./Query/PostQuery";
import { popularQuery } from "./Query/PopularQuery";
import { testimonialQuery } from "./Query/TestimonialQuery";
import { socialQuery } from "./Query/SocialQuery";
import { mutateTesimonial } from "./Mutation/Testimonial";
import { INewTestimony, ITestimonial } from "../models/Testimonial";
import Axios from "axios";
import uniqid from "uniqid";
import { IImage } from "../models/Image";

const endpoint =
  "https://api-apeast.graphcms.com/v1/ck4wi2nmccz8b01bqcjht3b8x/master";

const query = `
query {
    ${brandInfoQuery},
    ${postQuery},
    ${popularQuery},
    ${testimonialQuery},
    ${socialQuery}
}`;

const graphCMS = {
  GetALL: async () => await request<IModels>(endpoint, query),
  getTestimonials: async () =>
    await request<ITestimonial[]>(endpoint, `query {${testimonialQuery}}`),
  createTestimonial: async (review: INewTestimony, imageURL: string) => {
    const fn: string[] = imageURL.toString().split("\\");

    try {
      const { data } = await Axios.post(
        `https://www.filestackapi.com/api/store/S3?key=AqTusWlPTMuGVWthlX3tKz&path=/ee2281c603294f8b9912f6e6b543e5f5-master/${uniqid()}-${
          fn[fn.length - 1]
        }`,
        {
          fileUpload: imageURL
        },
        {
          headers: {
            "Content-Type": "image/jpeg"
          }
        }
      );

      console.log("axios:", data);

      const url: string[] = data.url.split("/");
      const key: string[] = data.key.split("/");

      const image: IImage = {
        handle: url[url.length - 1],
        fileName: key[key.length - 1],
        height: 100,
        width: 100,
        size: parseInt(data.size),
        mimeType: data.type
      };
      const query = await mutateTesimonial(review, image);
      const res = await request<any>(endpoint, query);
      console.log("graphCMS:response", res);
      return res;
    } catch (error) {
      return error;
    }
  }
};

export default graphCMS;
