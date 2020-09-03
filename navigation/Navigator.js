import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStack, createStackNavigator} from '@react-navigation/stack';

import {LoginScreen} from '../screens/login';
import {ListScreen} from '../screens/list';


const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="Login" 
            component={LoginScreen} 
            options={(navigation)=>({title:'Login Screen'})}
            />
        <Stack.Screen name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {Navigator};
