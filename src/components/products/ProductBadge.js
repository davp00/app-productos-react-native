import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const getColor = ( amount ) =>
{
    if ( amount <= 0 )
        return '#e74c3c';
    else if ( amount < 10 )
        return '#f39c12';
    else
        return '#27ae60';
};

const ProductBadge = ( { amount, style } ) =>
{

    return (
        <View style={ [ styles.container, { backgroundColor:  getColor( amount) }, style ] } >
            <Text style={ styles.text }>{ amount.toString() }</Text>
        </View>
    )
};

const styles = StyleSheet.create({
   container: {
       backgroundColor: '#27ae60',
       borderRadius: 20,
       borderWidth: 0.1,
       borderColor: '#bdc3c7',
       minWidth: '10%',
       maxWidth: '12%',
       height: 25,
   },
    text: {
       alignSelf: 'center',
        marginTop: 3,
        color: '#ecf0f1',
        fontWeight: 'bold',
    }
});

export default ProductBadge