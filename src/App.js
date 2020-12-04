import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Screens from './Screens';
import { NavigationContainer } from '@react-navigation/native';

const firebaseConfig = {
    apiKey: "AIzaSyCvLgUf7bYHbVVkI6kiVYvXRQwNTmjm3RE",
    authDomain: "manager-290bc.firebaseapp.com",
    databaseURL: "https://manager-290bc.firebaseio.com",
    projectId: "manager-290bc",
    storageBucket: "manager-290bc.appspot.com",
    messagingSenderId: "502002594968",
    appId: "1:502002594968:web:f76665dd421f8fc11a8ced",
    measurementId: "G-XJ91K030WQ"
};
firebase.initializeApp(firebaseConfig);

const App = () => {

    return(
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <NavigationContainer>
                <Screens />
            </NavigationContainer>
        </Provider>
    );
}

export default App;