import ApolloClient from 'apollo-boost';
import userStore from './../store/UserStore';

const apolloClient = new ApolloClient({
    uri: 'http://192.168.1.6:3000/graphql',
    request: operation =>
        operation.setContext(() => ({
            headers: {
                authorization: userStore.getToken()
            }
        })),
});

export default apolloClient;