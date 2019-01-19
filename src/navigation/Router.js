import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleSheet } from 'react-native';
import LoginScreen from "../screens/LoginScreen";
import EstablishmentScreen from "../screens/EstablishmentScreen";
import userStore from '../store/UserStore';
import LoadingScreen from "../screens/LoadingScreen";
import ProductScreen from "../screens/ProductScreen";
import MenuScreen from "../screens/MenuScreen";

import TabIcon from './TabIcon';


const locale = userStore.locale;

const AppRouter = () => (
    <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle}>
        <Scene key="root">
            <Scene
                key="LoadingScreen"
                component={ LoadingScreen }
                title="AppName"
                initial
                direction="vertical"
                hideNavBar
            />
            <Scene
                key="LoginScreen"
                component={ LoginScreen }
                title="Login"
                direction="vertical"
                hideNavBar
            />
            <Scene
                key="EstablishmentScreen"
                component={ EstablishmentScreen }
                title={ locale.get('Nav','EstablishmentScreen')}
            />

            <Scene
                key='EstRoot'
                tabs
                hideNavBar
                showLabel={ false }
            >

                <Scene initial
                       key='Products'
                       title='Productos'
                       component= { ProductScreen }
                       icon={ TabIcon }
                       iconName='box'
                       type= 'Feather'/>

                <Scene key='Configuration'
                       title='Configuración'
                       component= { MenuScreen }
                       icon={ TabIcon }
                       iconName='settings'
                       type='SimpleLineIcons'/>
            </Scene>
        </Scene>
    </Router>
);


const styles = StyleSheet.create({
    navBar: {

    },
    navTitle: {
        color: '#2f3640', // changing navbar title color,
        fontFamily: 'sans-serif-light',
        fontWeight: '400'
    },
});

export default AppRouter;
