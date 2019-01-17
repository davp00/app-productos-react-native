import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Alert
} from 'react-native';
import { RkText, RkChoice, RkCard } from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { observer, inject } from 'mobx-react/native';
import { graphql } from 'react-apollo';
import EstablishmentQuerys from './../graphql/querys/Establishment';
import LoadingSpinner from "../components/LoadingSpinner";
import EstablishmentList from "../components/establishment/EstList";
import { Actions } from 'react-native-router-flux';

@inject('UserStore')
@observer
class EstablishmentScreen extends Component {

    onRightButtonPress()
    {
        const { UserStore } = this.props;
        Alert.alert(
            '',
            '',
            [
                { text: 'Cerrar Sesión', onPress: () => { UserStore.LogOut(); Actions.replace('LoginScreen')} }
            ]
        )
    }

    _renderRightButton = () => {
        return(
            <TouchableWithoutFeedback onPress={() => this.onRightButtonPress() } >
                <Icon name="ellipsis-v" size={18} color='black' style = { styles.icon } />
            </TouchableWithoutFeedback>
        );
    };

    componentWillMount ()
    {
        this.props.navigation.setParams({
            right :this._renderRightButton,
        });
    }

    constructor()
    {
        super();
        this.state = {
            saveSelected: true
        }
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
                <View style = { styles.container }>
                    <RkCard style={ styles.optionsCard }>
                        <View style = { styles.optionsPanel }>
                            <RkChoice
                                selected = { this.state.saveSelected }
                                 style={ styles.optionSwitch }
                                rkType='posNeg'
                            />
                            <RkText>Guardar seleccionado</RkText>
                        </View>
                    </RkCard>
                    <EstablishmentList establishments={ data.getStablishments }/>
                </View>
            );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        marginTop: 10
    },
    optionsPanel: {
        paddingVertical: 10,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    optionsCard: {
        marginBottom: 10
    },
    optionSwitch: {
        marginRight: 20
    },
    icon : {
        paddingRight: 15
    }
});

export default graphql(
    EstablishmentQuerys.getEstablishments
)( EstablishmentScreen );