import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { BookApp } from './src/components/bookApp';
import { LoginForm } from './src/components/loginForm';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/navigators/app-navigator';

function App(): JSX.Element {

  return (
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
