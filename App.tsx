import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { CalculatorScreen } from './src/screens';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
