import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/EvilIcons';

const MenuItem = ( { title, color, onPress } ) => (
    <TouchableOpacity 
        onPress={ onPress }
        style={ styles.container } >
            <View style={ styles.containerButton }>
                <Text                     
                    style={ [ styles.text, color ? { color } : { fontWeight: '500' } ] }>
                { title }
                </Text>
                <Icon
                    name='chevron-right'
                    style={ styles.icon }
                    size={ 30 }
                />
            </View>
    </TouchableOpacity>
);



export default MenuItem;