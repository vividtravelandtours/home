export const popularQuery = `
topDestinations(where: {status: PUBLISHED}) {
    status
    updatedAt
    createdAt
    id
    bannerImage {
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
    promoText
    tourPackage
    extraInfo
    tourPackageOption
    description
  }`;