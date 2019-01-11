import gql from 'graphql-tag';
export default {
    Login: gql`
        mutation LogIn($email: String!, $pass: String!){
          Login(email: $email, pass: $pass)
          {
            id
            name
            lastName
            account{
              token
            }
          }
        }
    `,

}