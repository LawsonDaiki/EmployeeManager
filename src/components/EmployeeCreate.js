import React from 'react';
import { Card, CardSection, Input, Button } from './common';
import { useSelector, useDispatch } from 'react-redux'
import { employeeCreate } from '../actions';
import { useNavigation } from '@react-navigation/native';
import EmployeeForm from './EmployeeForm';

const EmployeeCreate = () => {
    const navigation = useNavigation();
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const onButtonPress = (name, phone, shift) => dispatch(employeeCreate({ name, phone, shift: shift || 'Monday' }));

    return (
        <Card>
            <EmployeeForm />
            <CardSection>
                <Button onPress={() => {
                    onButtonPress(state.employeeForm.name, state.employeeForm.phone, state.employeeForm.shift);
                    navigation.goBack();
                    }}>
                    Create
                </Button>
            </CardSection>
        </Card>
    );
};

export default EmployeeCreate;