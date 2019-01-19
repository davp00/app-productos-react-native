import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    TextInput,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SearchBar extends Component {

    constructor()
    {
        super();
        this.state = {
            _textInput: null
        }
    }

    clearText()
    {
        const { handleText } = this.props;
        handleText('');
        this.state._textInput.blur();
    }

    render()
    {
        const { handleText, text } = this.props;
        return (
            <TouchableWithoutFeedback onPress={ () => this.state._textInput.focus() }>
                <View style={ styles.container }>
                    <Icon name='search' size={ 20 } color={'#2f3640'} style={ styles.icon }/>
                    <TextInput
                        value={ text }
                        onChangeText={ handleText }
                        style={ styles.input }
                        placeholder='Buscar'
                        ref={ component => this.state._textInput = component }
                    />
                    {
                        text !== '' && (
                            <TouchableWithoutFeedback onPress={ () => this.clearText() }>
                                <Icon name='times' size={ 15 } style={ styles.clearText }/>
                            </TouchableWithoutFeedback>
                        )
                    }
                </View>
            </TouchableWithoutFeedback>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        backgroundColor: 'rgba(220, 221, 225,0.3)',
        borderWidth: 0.5,
        borderColor: '#bdc3c7',
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon:{
        marginHorizontal: 15
    },
    input: {
        minWidth: '75%',
        maxWidth: '76%',
    },
    clearText: {
        marginLeft: 'auto',
        marginRight: 15
    }
});