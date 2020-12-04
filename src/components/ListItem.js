import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { CardSection } from './common';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux'
import { employeeUpdate } from '../actions';

const ListItem = ({ employee }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const onRowPress = (name, phone, shift, uid) => {
        dispatch(employeeUpdate({ prop: 'name', value: name }));
        dispatch(employeeUpdate({ prop: 'phone', value: phone }));
        dispatch(employeeUpdate({ prop: 'shift', value: shift }));
        dispatch(employeeUpdate({ prop: 'uid', value: uid }));
        navigation.navigate('EmployeeEdit');
    }
    
    return (
        <TouchableWithoutFeedback onPress={() => onRowPress(employee.name, employee.phone, employee.shift, employee.uid)}>
            <View>
                <CardSection>
                    <Text style={styles.titleStyle}>{employee.name}</Text>
                </CardSection>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
}

export default ListItem;