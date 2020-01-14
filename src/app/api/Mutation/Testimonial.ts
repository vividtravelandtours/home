import { IImage } from "../../models/Image";
import { INewTestimony } from "../../models/Testimonial";

export const mutateTesimonial = (review: INewTestimony, image: IImage) => {
  return `
  mutation {
    createTestimonial (data: {
      status: PUBLISHED,
      name: "${review.name}",
      tourDestination: "${review.tourDestination}",
      review: "${review.review}",
      date: "2018-01-15T00:00:00.000Z",
      picture: {
        create: {
          status: PUBLISHED,
          handle: "${image.handle}",
          fileName: "${image.fileName}",
          height: ${image.height},
          width: ${image.width},
          size: ${image.size},
          mimeType: "${image.mimeType}"
        }
      }
    }) {
      status
      updatedAt
      createdAt
      id
      picture {
        status
        updatedAt
        createdAt
        id
        handle
        fileName
        height
        width
        size
        mimeType
      }
      name
      tourDestination
      review
      date
    }
  }
  `;
};

