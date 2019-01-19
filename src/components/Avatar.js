import React, {Component} from 'react';
import {
    TouchableWithoutFeedback,
    StyleSheet,
    Image,
} from 'react-native';
import defaultImage from './../images/LoginBackground.jpg';


export default class Avatar extends Component {
    render()
    {
        const { uri } = this.props;
        return (
            <TouchableWithoutFeedback style={ styles.container }>
                <Image
                    resizeMode={"cover"}
                    style={ styles.image }
                    source={ { uri } }
                />
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
   image: {
       height: 40,
       width: 40,
       borderRadius: 20,
       overflow: "hidden",
   },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});