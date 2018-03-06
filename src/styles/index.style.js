import { StyleSheet } from 'react-native';

export const colors = {
    dullMaroon: 'rgb(157, 54, 84)',
    dullWhite: 'rgb(240,240,240)',
    lightBlue: 'rgb(50,150,200)',
    golden: 'rgb(150,120,50)',
    black: 'rgb(8,8,8)',
    grey: 'rgb(41,41,41)',
    background1: 'rgb(0,0,0)',
    background2: 'rgb(69,16,32)'
};

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: colors.background1
    },
    container: {
        flex: 1,
        // backgroundColor: colors.background1
    },
    gradient: {
        ...StyleSheet.absoluteFillObject
    },
    scrollview: {
        flex: 1
    },
    exampleContainer: {
        paddingVertical: 30
    },
    exampleContainerDark: {
        backgroundColor: colors.black
    },
    exampleContainerLight: {
        backgroundColor: 'white'
    },
    title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color: colors.black
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
    slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
    sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },
    paginationContainer: {
        paddingVertical: 8
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 8
    }
});
