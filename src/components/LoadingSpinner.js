import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import AppStyles from './../styles/AppStyles';

export default class LoadingSpinner extends Component{

    render( )
    {
        return (
            <View style={[ AppStyles.container, { marginTop: 15} ]}>
                <ActivityIndicator size="small" color="#2980b9"/>
            </View>
        )
    }
}