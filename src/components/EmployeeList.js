import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { employeesFetch, employeeFormReset } from '../actions';
import { useFocusEffect } from '@react-navigation/native';
import ListItem from './ListItem';

const EmployeeList = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const fetchData = () => dispatch(employeesFetch());
    const resetEmployeeForm = () => dispatch(employeeFormReset());

    useFocusEffect(
        useCallback( () => {
            fetchData();
            resetEmployeeForm();
        }, [])
    );

    const array = [];
    
    if (state.employees) {
        Object.keys(state.employees).forEach((key) => {
            array.push({...state.employees[key], "uid": key});
        });
    }

    const renderRow = (employee) => {
        return <ListItem employee={employee} />
    }
    

    return (
        <>
            <FlatList
                data={array}
                keyExtractor={employee => employee.uid}
                renderItem={({ item }) => renderRow(item)}
            />
        </>
    );
};

export default EmployeeList