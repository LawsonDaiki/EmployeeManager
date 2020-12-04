// Import libraries for making components
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Make component
const Header = (props) => {
    return (
        <View style={styles.viewStyle} >
            <Text style={styles.textStyle} >{props.headerText}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

// Make the component available to other parts of the app
export {Header};