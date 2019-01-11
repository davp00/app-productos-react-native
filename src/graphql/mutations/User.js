import gql from 'graphql-tag';

export default {
    Login: gql`
        mutation LogIn($email: String!, $pass: String!) {
          Login(email: $email, pass: $pass) {
            profile {
              name
              lastName
            }
            account {
              token
            }
          }
        }
    `
}