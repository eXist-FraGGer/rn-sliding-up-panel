import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container        : {
        position: 'absolute',
        top     : 0,
        left    : 0,
        right   : 0,
        bottom  : 0
    },
    backdrop         : {
        position       : 'absolute',
        top            : 0,
        bottom         : 0,
        left           : 0,
        right          : 0,
        backgroundColor: '#000'
    },
    animatedContainer: {
        flex     : 1,
        position : 'absolute',
        left     : 0,
        right    : 0,
        alignSelf: 'stretch'
    },
    favoriteIcon     : {
        position       : 'relative',
        alignItems     : 'center',
        justifyContent : 'flex-start',
        width          : '100%',
        height         : 20,
        backgroundColor: '#fff',
        shadowOpacity  : 0.5,
        shadowRadius   : 10,
        shadowColor    : 'rgba(0, 0, 0, 0.5)',
        shadowOffset   : { height: -5, width: 0 }
    },
    swipeControl     : {
        width          : '10%',
        height         : 2,
        backgroundColor: '#000'
    }
});
