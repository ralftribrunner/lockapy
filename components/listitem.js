import React from 'react';
import {
  Text,
  StyleSheet
} from 'react-native';

const ListItem = () => {
    return (
        <Text style={styles.container}>AAA</Text>
    );

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '5%',
    borderColor: 'black',
    borderWidth: 5,
  }
});

export {ListItem};

