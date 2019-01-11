import gql from 'graphql-tag';


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