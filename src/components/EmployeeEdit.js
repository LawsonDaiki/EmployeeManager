import React, { useState } from 'react';
import { Card, CardSection, Button, ConfirmModal } from './common';
import { useSelector, useDispatch } from 'react-redux'
import { employeeSave, employeeDelete } from '../actions';
import { useNavigation } from '@react-navigation/native';
import EmployeeForm from './EmployeeForm';

const EmployeeEdit = () => {
    const navigation = useNavigation();
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const onButtonPress = (name, phone, shift, uid) => dispatch(employeeSave({ name, phone, shift, uid}));

    const [showModal, setShowModal] = useState(false);

    const onAccept = async (uid) => {
        await dispatch(employeeDelete({uid}));
        navigation.goBack();
    }


    return (
        <Card>
            <EmployeeForm />
            <CardSection>
                <Button onPress={() => {
                    onButtonPress(state.employeeForm.name, state.employeeForm.phone, state.employeeForm.shift, state.employeeForm.uid);
                    navigation.goBack();
                    }}>
                    Edit
                </Button>
                <Button onPress={() => setShowModal(true)}>
                    Delete
                </Button>
            </CardSection>
            <ConfirmModal
                visible={showModal}
                onAccept={() => {
                    onAccept(state.employeeForm.uid);
                }}
                onDecline={() => setShowModal(false)}
            >
                Are you sure you want to delete this?
            </ConfirmModal>
        </Card>
    );
};

export default EmployeeEdit;