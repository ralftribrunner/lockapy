import React from 'react';
import {TextInput, Text, Alert,Icon, View, StyleSheet} from 'react-native';
import {ShowItem} from '../components/showitem';
import {ListItem} from '../components/listitem';
import FAB from 'react-native-fab';

const ListScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  return (
    <View styles={styles.container}>
      <ListItem>{'aaaaa'}</ListItem>
      <FAB 
        styles={styles.fab}
        buttonColor="red"
        iconTextColor="#FFFFFF"
        onClickAction={createTwoButtonAlert}
        visible={true}
        
      />
    </View>

    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  fab: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  }
});


export {ListScreen};
