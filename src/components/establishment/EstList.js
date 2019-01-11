import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import EstablishmentItem from "./EstItem";
import { observer, inject } from 'mobx-react/native';


@inject('EstStore')
@observer
class EstablishmentList extends Component {

    constructor()
    {
        super();
        this.onPressEst            = this.onPressEst.bind( this );
    }


    onPressEst( estCode )
    {
        const { EstStore } = this.props;
        EstStore.selected = estCode;

        // IR A LA SCREEN DE TABS
    }

    render()
    {
        const { establishments } = this.props;
        return (
            <View style = { styles.container }>
                <FlatList
                    renderItem={ ( {item} ) => <EstablishmentItem onPressEst={ this.onPressEst } est={ item } />}
                    data={ establishments }
                    keyExtractor={(item, index) => item.code.toString()}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
       paddingHorizontal: 10,
       marginTop: 10
   }
});

export default EstablishmentList;