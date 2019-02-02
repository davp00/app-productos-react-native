import React, { Component } from 'react';
import { View , Text } from 'react-native';
import styles from './styles';


export default class MenuDivider extends Component{

    render()
    {
        const { title } = this.props;
        return (
            <View style={ styles.container }> 
                <Text style={ styles.text }>
                    { title }
                </Text>
            </View>
        )
    };


}