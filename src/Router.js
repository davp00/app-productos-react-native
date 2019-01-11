import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoginScreen from "./screens/LoginScreen";
import EstablishmentScreen from "./screens/EstablishmentScreen";
import userStore from './store/UserStore';
import LoadingScreen from "./screens/LoadingScreen";

const locale = userStore.locale;

const AppRouter = () => (
    <Router>
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
        </Scene>
    </Router>
);

export default AppRouter;
