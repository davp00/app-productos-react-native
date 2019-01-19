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
        const { EstStore, saveSelected } = this.props;
        EstStore.setSelected( estCode,  saveSelected );
        Actions.replace('EstRoot',{
            code: 1
        });
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