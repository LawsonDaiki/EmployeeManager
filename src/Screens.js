import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const LoginScreen = () => {
    return (
        <LoginForm />
    );
}

const EmployeeListScreen = ({ navigation }) => {
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate('EmployeeCreate')}
                  style={{marginRight: 10}}>
                  <Text style={{color: 'black', fontWeight: 'bold'}}>ADD</Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
    
    return (
        <EmployeeList />
    );
};

const EmployeeCreateScreen = () => {
    return (
        <EmployeeCreate />
    )
}

const EmployeeEditScreen = () => {
    return (
        <EmployeeEdit />
    )
}

const Screens = () => {
    const state = useSelector(state => state)

    // if (state.isLoading) {
    //     // We haven't finished checking for the token yet
    //     return <SplashScreen />;
    // }

    return(
        <Stack.Navigator>
            {state.auth.user ? (
                <>
                    <Stack.Screen name="EmployeeList" component={EmployeeListScreen} options={{title: 'Employees' }} />
                    <Stack.Screen name="EmployeeCreate" component={EmployeeCreateScreen} options={{ title: 'Create Employee' }}/>
                    <Stack.Screen name="EmployeeEdit" component={EmployeeEditScreen} options={{ title: 'Edit Employee' }}/>
                </>
            ) : (
                <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Please Login' }}/>
            )}
        </Stack.Navigator>
    );
};

const styles = {

}

export default Screens;