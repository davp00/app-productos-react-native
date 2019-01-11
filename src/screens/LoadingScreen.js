import React, { Component } from 'react';
import {
    View,
    Text
}from 'react-native';

import { observer, inject } from 'mobx-react/native';
import {Actions} from "react-native-router-flux";

@inject('UserStore')
@observer
class LoadingScreen extends Component{

    constructor()
    {
        super();
        this.Redirect = this.Redirect.bind(this);
    }

    Redirect = async () =>
    {
        const { UserStore } = this.props;

        if ( await UserStore.getUser() )
        {
            Actions.replace('EstablishmentScreen');
        }else
        {
            Actions.replace('LoginScreen');
        }
    };

    componentDidMount( prevProps )
    {
        setTimeout(() => this.Redirect(), 0);
    }

    render()
    {
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
}

export default LoadingScreen;