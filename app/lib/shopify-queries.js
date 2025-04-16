
export const HEADER_QUERY = `#graphql
  query Header($headerMenuHandle: String!) {
    shop {
      name
      primaryDomain {
        url
      }
    }
    menu(handle: $headerMenuHandle) {
      id
      items {
        id
        title
        url
        type
        items {
          id
          title
          url
          type
        }
      }
    }
  }
`;
