import React from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { CardSection, Input } from './common';
import { useSelector, useDispatch } from 'react-redux'
import { employeeUpdate } from '../actions';

const EmployeeForm = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const onEmployeeChange = (prop, value) => dispatch(employeeUpdate({ prop: prop, value: value }));

    return (
        <View>
            <CardSection>
                <Input
                    label='Name'
                    placeholder='John Doe'
                    value={state.employeeForm.name}
                    onChangeText={(name) => onEmployeeChange('name', name)}
                />
            </CardSection>

            <CardSection>
                <Input
                    label='Phone'
                    placeholder='555-555-5555'
                    value={state.employeeForm.phone}
                    onChangeText={(phone) => onEmployeeChange('phone', phone)}
                />
            </CardSection>

            <CardSection>
                <Text style={{fontSize: 18, paddingLeft: 20, paddingTop: 13}}>Shift</Text>
                <Picker
                    selectedValue={state.employeeForm.shift}
                    style={{flex: 1, marginLeft: 70, borderColor: 'red', borderWidth: 1}}
                    onValueChange={(day) => onEmployeeChange('shift', day)}
                >
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wednesday" value="Wednesday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
            </CardSection>
        </View>
    )
}

export default EmployeeForm;