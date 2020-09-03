import React from 'react';
import {TextInput, Button, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <TextInput />
      <Button title="valami" onPress={() => navigation.navigate('List')} />
    </View>
  );
};

export {LoginScreen};
