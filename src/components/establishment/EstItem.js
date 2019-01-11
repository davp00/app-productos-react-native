import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    TouchableWithoutFeedback
} from 'react-native';

import { RkCard, RkText } from 'react-native-ui-kitten';
import defaultImage from './../../images/LoginBackground.jpg';

const EstablishmentItem = ({ est, onPressEst }) => (
    <TouchableWithoutFeedback onPress={ () => onPressEst( est.code ) }>
        <RkCard rkType='story' style={ styles.item } >
            <Image
                rkCardImg
                source={ ( est.image )? { uri: est.image }: defaultImage } />
            <View rkCardContent>
                <RkText>{ est.name }</RkText>
                <View style={ styles.infoEst } >
                    <RkText rkType='infoEst'>Propietario: { est.owner.fullName }</RkText>
                    <RkText rkType='infoEst'>Codigo: { est.code.toString() }</RkText>
                </View>
            </View>
        </RkCard>
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    item : {
        marginBottom: 10
    },
    infoEst: {
        marginTop: 10
    }
});

export default EstablishmentItem;