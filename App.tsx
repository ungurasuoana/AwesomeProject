import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import { BookApp } from './src/components/bookApp';
import { LoginForm } from './src/components/loginForm';
import { NavigationContainer } from '@react-navigation/native';
import { AppNavigator } from './src/navigation/navigators/app-navigator';
import { BottomTabs } from './src/navigation/navigators/tab-navigator';
import { CustomNavigation } from './src/navigation/navigators/custom-navigator';
import { BookNavigation } from './src/navigation/navigators/book-navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Login } from './src/screens/login-new';
import { Card } from './src/screens/card';
import { HookForm } from './src-new/screens/hookForm';
import { StateForm } from './src-new/screens/stateForm';
import { Search } from './src-new/screens/search';

function App(): JSX.Element {

  return (
    //<Search/>
    //<StateForm/>
    //<Login/>
    //<HookForm/>
    <NavigationContainer>
      <BookNavigation/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({

});

export default App;
