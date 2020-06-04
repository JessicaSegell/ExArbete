import 'react-native-gesture-handler';
import React, { useState } from 'react';
import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import store from './store/store';
import { Provider } from 'react-redux';
import { YellowBox } from 'react-native';
import _ from 'lodash';

//window.addEventListener = x => x;
// removes annoying pointless warning
YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};


const fetchFonts = () => {
  return Font.loadAsync({
    'kalam-bold': require('./assets/fonts/Kalam-Bold.ttf'),
    'kalam-regular': require('./assets/fonts/Kalam-Regular.ttf'),
    'source-sans-regular': require('./assets/fonts/SourceSansPro-Regular.ttf'),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
      />
    )
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
