/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Navigator} from './navigation/Navigator';
import {ListScreen} from './screens/list'

const App: () => React$Node = () => {
  /* return <Navigator />; */
  return <ListScreen/>;
};

export default App;
