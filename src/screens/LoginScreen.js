import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    ImageBackground,
    Keyboard
} from 'react-native';
import {
    RkButton,
    RkTextInput,
    RkCard,
    RkText,
} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BackgroundLogin from './../images/LoginBackground.jpg';
import { observer, inject } from 'mobx-react/native';
import { Actions } from 'react-native-router-flux';

//Graphql Service
import { graphql } from 'react-apollo';
import UserMutation from '../graphql/mutations/User';



@inject('UserStore')
@observer
class LoginScreen extends Component{

    constructor()
    {
        super();
        this.handleSubmit = this.handleSubmit.bind( this );

        this.state = {
            email: '',
            pass: '',
            errorPass: false,
            errorEmail: false,
            userNotFound: false
        }
    }

    handleSubmit()
    {
        const { email, pass } = this.state;


        this.setState( { errorEmail: false, errorPass: false, userNotFound: false } );

        if ( email.length !== 0 && pass.length !== 0 )
        { // ERROR AL LOGUEARSE
            const { Login, UserStore } = this.props;

            Keyboard.dismiss();

            Login( this.state.email , this.state.pass )
                .then( ({ data }) => {

                    if ( data.Login !== null)
                    {
                        UserStore.LoginUser( data.Login );
                        Actions.replace('EstablishmentScreen');
                    }else
                        this.setState( { userNotFound: true, pass: '' } );
                })
                .catch( err => console.error(err) );
        }

        else if ( email.length === 0 && pass.length === 0 )
            this.setState( { errorEmail: true, errorPass: true } );
        else if ( email.length === 0 )
            this.setState( { errorEmail: true });
        else if ( pass.length === 0 )
            this.setState( {errorPass: true });
    }

    render()
    {
        const { UserStore } = this.props;
        return(
            <ImageBackground source={BackgroundLogin} style={ styles.container }>
                <RkCard  rkType='story shadowed' style={ styles.cardContainer }>

                    <View rkCardHeader>

                        <RkText rkType='header'>{ UserStore.locale.get('Login', 'cardTitle') }</RkText>

                    </View>

                    <View rkCardContent>

                        <RkTextInput
                            rkType={ this.state.errorEmail? 'error': ''}
                            onChangeText={ (text) => this.setState({ email: text, errorEmail: false })}
                            value={ this.state.email }
                            placeholder={ UserStore.locale.get('Login', 'placeholderEmail')}
                            label={<Icon name={'envelope'}/>}
                        />
                        <RkTextInput
                            rkType={ this.state.errorPass? 'error': ''}
                            secureTextEntry
                            onChangeText={ (text) => this.setState({ pass: text, errorPass: false})}
                            value={ this.state.pass }
                            placeholder={ UserStore.locale.get('Login', 'placeholderPass') }
                            label={<Icon name={'lock'}/>}
                        />
                        <RkButton onPress={ this.handleSubmit } rkType='primary rounded' style={ styles.btnLogin } >
                            { UserStore.locale.get('Login', 'buttonText') }
                        </RkButton>

                        {
                            this.state.userNotFound ?(
                                <RkText rkType='danger medium' style={ styles.errorMessage }>{ UserStore.locale.get('Login', 'userNotFound') }</RkText>
                            ): null
                        }
                    </View>
                </RkCard>
            </ImageBackground>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    btnLogin: {
        alignSelf: 'center',
        marginTop: 20
    },
    cardContainer: {
        width: 350
    },

    errorMessage: {
        marginTop: 20,
        marginBottom: 10
    }
});

export default graphql(
    UserMutation.Login,
    {
        props: ( { mutate } ) => ({
            Login: ( email, pass ) => mutate({ variables: { email, pass }})
        })
    }
)( LoginScreen );