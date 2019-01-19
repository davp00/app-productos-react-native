import gql from 'graphql-tag';

export const getProducts = gql`
    query getProducts($code: Int!, $name: String, $filter: String) {
      getStablishment(code: $code) {
        products(name: $name, filter: $filter) {
          name
          image
          amount
          price
          countable
        }
      }
    }
`;

export default {
    getEstablishments: gql`
    query Establishments{
      getStablishments{
        name
        code
        owner{
           fullName
        }
        image
      }
    }
    `
}