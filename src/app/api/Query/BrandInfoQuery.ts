export const brandInfoQuery =`
brandSiteSystems(where: {status: PUBLISHED}) {
    status
    updatedAt
    createdAt
    id
    logo {
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
    header
    subHeader
    biography
    emailAddress
}
`;