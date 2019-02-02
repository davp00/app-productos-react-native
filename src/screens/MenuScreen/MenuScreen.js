import React, {Component} from 'react';
import {
    ScrollView,
    Text
} from 'react-native';
import MenuItem from '../../components/MenuItem/MenuItem';
import styles from './styles';
import MenuDivider from '../../components/MenuDivider/MenuDivider';
import { observer, inject } from 'mobx-react';
import { Actions } from 'react-native-router-flux';


@inject('UserStore')
@observer
class MenuScreen extends Component {

    LogOut = () => 
    {
        const { UserStore } = this.props;
        UserStore.LogOut();
        Actions.replace( 'LoginScreen' );
    };

    ChangeEstablishment = () =>
    {
        Actions.EstablishmentScreen();
    };

    render()
    {
        return(
            <ScrollView style={ styles.container }>
                <MenuDivider title='ESTABLECIMIENTO'/>
                <MenuItem title="Trabajadores"/>
                <MenuItem title='Administrar Productos'/>
                
                <MenuDivider title='PERFIL'/>
                <MenuItem title='Editar Perfil'/>
                <MenuItem title='Cambiar Contraseña'/>

                <MenuDivider title='CUENTA' />
                <MenuItem title='Cambiar de Establecimiento' onPress={ this.ChangeEstablishment }/>
                <MenuItem title='Cerrar Sesión' onPress={ this.LogOut }/>
            </ScrollView>
        )
    }


}

export default MenuScreen;