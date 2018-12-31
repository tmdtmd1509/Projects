import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({secureTextEntry, value, onChangeText, placeHolder}) => {
    const {inputStyle, containerStyles} = styles
    return(
        <View style={containerStyles}>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                placeholder={placeHolder}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
    
}

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight:23,
        fontSize: 18,
        flex: 1
    },
    containerStyles: {
        flex: 1,
        height: 40
    }
}

export {Input};