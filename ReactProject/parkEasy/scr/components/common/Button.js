import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Button = (props) => {
    const {
        buttonStyle,
        textStyle,
        containerStyle} = styles
    return (
        <View style={containerStyle}> 
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={textStyle}>{props.children}</Text>
        </TouchableOpacity>
        </View>

    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color:'#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        borderColor: '#93A4FF',
        borderRadius: 5,
        borderWidth: 1,
        marginLeft: 5,
        marginRight:5,
    },
    containerStyle: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        paddingTop: 10,
        paddingBottom: 10
    }

}

export {Button};