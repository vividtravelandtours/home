export const socialQuery = `
socialSites(where: {status: PUBLISHED}) {
    status
    updatedAt
    createdAt
    id
    icon {
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
    alias
    linkAddress
}`;