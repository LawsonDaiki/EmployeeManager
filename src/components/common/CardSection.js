import React from 'react';
import { View } from 'react-native';

const CardSection = (prop) => {
    return (
        <View style={[styles.containerStyle, prop.style]}>{prop.children}</View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroungColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
}

export {CardSection};