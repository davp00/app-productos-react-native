import React, { Component } from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import EstablishmentItem from "./EstItem";
import { observer, inject } from 'mobx-react/native';
import {Actions} from "react-native-router-flux";


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
        Actions.replace('EstRoot');
    }

    render()
    {
        const { establishments } = this.props;
        return (
            <View>
                <FlatList
                    renderItem={ ( {item} ) => <EstablishmentItem onPressEst={ this.onPressEst } est={ item } />}
                    data={ establishments }
                    keyExtractor={(item, index) => item.code.toString()}/>
            </View>
        )
    }
}


export default EstablishmentList;