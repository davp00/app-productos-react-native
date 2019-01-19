import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import { getProducts as query } from './../graphql/querys/Establishment';
import { graphql } from 'react-apollo';
import { observer, inject } from 'mobx-react/native';
import ProductItem from "../components/products/ProductItem";

@inject('EstStore')
@observer
class ProductScreen extends  Component{
    render()
    {
        const { data } = this.props;
        const { getStablishment } = data;
        const  products  = ( data.loading )? [] : getStablishment.products;
        return(
            <View style={ styles.container }>
                <View style={ styles.containerSearchBar }>
                    <Text> Barra de buqueda aca</Text>
                </View>
                <View style={ styles.containerItems }>
                    <FlatList renderItem={ ( { item } ) => <ProductItem product={ item } />}
                      data={ products }
                      keyExtractor={(item, index) => index.toString()}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    containerSearchBar: {
        marginVertical: 15
    },
    containerItems: {
        paddingHorizontal: 10
    }
} );



export default graphql(/*ARREGLAR ERROR DE FILTRO*/
    query,
    {
        options: props => {
            console.log( props );
            return ({ variables: { code: 1} })
        }
    }
)( ProductScreen );