import {RkTheme} from 'react-native-ui-kitten';

RkTheme.setType('RkCard', 'story', {
    img: {
        height: 100,
        opacity: 0.95
    },
    header: {
        alignSelf: 'center'
    },
    content:{

    }
});

RkTheme.setType('RkTextInput','error',{
    labelColor:'darkred',
    underlineColor:'darkred',
    underlineWidth:1,
});

RkTheme.setType( 'RkText', 'infoEst', {
   fontSize: 11
});

export default RkTheme;