import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import ProductBadge from "./ProductBadge";
import Avatar from "../Avatar";

const ProductItem = ( { product } ) => (
    <View style={ styles.container }>
        <Avatar uri={ product.image }/>
        <View style={ styles.containerInfo }>
            <Text style={ styles.itemName }> { product.name } </Text>
            <Text style={ styles.price }> Precio: { product.price.toString() }</Text>
        </View>
        <ProductBadge amount={ product.amount } style={ styles.badge }/>
    </View>
);


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    badge: {
        /*alignSelf: 'center'*/
        marginLeft: 'auto'
    },
    containerInfo: {
        marginHorizontal: 10
    },
    itemName: {
        color: '#2d3436'
    },
    price: {
        fontSize: 10
    }
});

export default ProductItem;