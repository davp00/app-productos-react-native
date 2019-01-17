import React from 'react';
import { View, StyleSheet } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const types = {
    'SimpleLineIcons': SimpleLineIcons,
    'Feather': Feather,
    'Ionicons': Ionicons,
    'MaterialIcons': MaterialIcons
};

const TabIcon = ( { focused, iconName, type } ) =>
{
    const Icon = types[ type ];
    return (
        <View style={ styles.container }>
            <Icon name={ iconName } size={20} color={ focused ? '#c23616': 'black'}/>
        </View>
    );
};


const styles = StyleSheet.create({
   container: {}

});


export default TabIcon;
