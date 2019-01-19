import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList
} from 'react-native';
import { getProducts as query } from './../graphql/querys/Establishment';
import { graphql } from 'react-apollo';
import { inject } from 'mobx-react/native';
import ProductItem from "../components/products/ProductItem";
import SearchBar from "../components/SearchBar";
import LoadingSpinner from "../components/LoadingSpinner";


class ProductScreen extends  Component {

    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleText = this.handleText.bind( this );
    }


    handleText( text )
    {
        const { data, EstStore } = this.props;

        data.refetch({
            code: EstStore.selected ,
            name: (text !== '') ? text : null
        });
        this.setState({ text });
    }

    render()
    {
        const { data } = this.props;
        const { getStablishment } = data;
        return(
            <View style={ styles.container }>
                <View style={ styles.containerSearchBar }>
                    <SearchBar handleText={ this.handleText } text={ this.state.text }/>
                </View>
                {
                    !data.loading ? (
                        <View style={ styles.containerItems }>
                            <FlatList renderItem={ ( { item } ) => <ProductItem product={ item } />}
                                      data={ getStablishment.products }
                                      keyExtractor={(item, index) => index.toString()}/>
                        </View>
                    ) : (
                        <LoadingSpinner/>
                    )
                }
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
        marginVertical: 15,
        paddingHorizontal: 15,
        marginBottom: 10
    },
    containerItems: {
        paddingHorizontal: 10
    }
} );



export default inject('EstStore')(
    graphql(/*ARREGLAR ERROR DE FILTRO*/
        query,
        {
            options: props => ({ variables: { code: props.EstStore.selected} })
        }
    )( ProductScreen )
);