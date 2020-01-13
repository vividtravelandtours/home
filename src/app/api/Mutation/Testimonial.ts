export const mutateTesimonial = `
mutation newTestimonials() {
    createTestimonial(data: {
      status: PUBLISHED,
      name: "Efraim Lorenzana",
      tourDestination: "Baguio",
      review: "Very accomodating, will surely book again!",
      date: "01/13/2020",
      picture: {
        create: {
          status: PUBLISHED,
          handle: "samplehandle",
          fileName: "sample.jpg",
          height: 546,
          width: 546,
          size: 415509,
          mimeType: "image/jpg"
        }
      }
    }) {
      id
    }
  }
`;