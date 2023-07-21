import {Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
};

export default App;
