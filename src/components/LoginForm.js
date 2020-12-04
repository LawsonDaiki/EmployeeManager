import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

const LoginForm = () => {
    const state = useSelector(state => state)
    const dispatch = useDispatch();
    const onEmailChange = text => dispatch(emailChanged(text));
    const onPasswordChange = text => dispatch(passwordChanged(text));
    const login = (email, password) => dispatch(loginUser({ email, password }));

    const renderError = () => {
        if (state.auth.error) {
            return (
                <View>
                    <Text style={styles.errorTextStyle} >{state.auth.error}</Text>
                </View>
            )
        }
    }

    const renderButton = () => {
        if (state.auth.loading) {
            return <Spinner size='large'/>
        }
        else {
            return <Button onPress={() => login(state.auth.email, state.auth.password)}>Log In</Button>;
        }
    }

    return(
        <Card>
            <CardSection>
                <Input label='Email' placeholder='email@email.com' onChangeText={(text) => onEmailChange(text)} value={state.auth.email}/>
            </CardSection>

            <CardSection>
                <Input label='Password' placeholder='password' secureTextEntry onChangeText={(text) => onPasswordChange(text)} value={state.auth.password}/>
            </CardSection>

            {renderError()}

            <CardSection>
                {renderButton()}
            </CardSection>
        </Card>
    )
};

const styles = {
    errorTextStyle : {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;