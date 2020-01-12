export const testimonialQuery = `
testimonials(where: {status: PUBLISHED}) {
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
}`;