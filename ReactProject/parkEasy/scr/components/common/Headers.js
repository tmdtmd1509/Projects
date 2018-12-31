import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
        
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#86D9FF',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 30,
        height: 65,
        shadowColor: '#000',
        shadowOffet: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 2,
        position: 'relative'

    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300'
    }
};

export {Header};