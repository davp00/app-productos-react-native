import React, { Component } from 'react';
import {
    View,
    Text,
} from 'react-native';

import { observer, inject } from 'mobx-react/native';
import {Actions} from "react-native-router-flux";
import { graphql } from 'react-apollo';
import EstablishmentQuerys from './../graphql/querys/Establishment';
import LoadingSpinner from "../components/LoadingSpinner";
import EstablishmentList from "../components/establishment/EstList";

@inject('UserStore')
@observer
class EstablishmentScreen extends Component{
    constructor()
    {
        super();
    }



    render()
    {
        let { data } = this.props;

        if ( data.loading )
            return (
                <LoadingSpinner/>
            );
        else
            return (
                <EstablishmentList establishments={ data.getStablishments }/>
            );
    }
}

export default graphql(
    EstablishmentQuerys.getEstablishments
)( EstablishmentScreen );