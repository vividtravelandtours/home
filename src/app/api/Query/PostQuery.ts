export const postQuery = `
postUpdates(where: {status: PUBLISHED}) {
    status
    updatedAt
    createdAt
    id
    title
    content {
      raw
      html
    }
}
`;