import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { BookApp } from './src/components/bookApp';
import { LoginForm } from './src/components/loginForm';

function App(): JSX.Element {

  return (
    <LoginForm/>
  );
}

const styles = StyleSheet.create({

});

export default App;
