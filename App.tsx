/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { MyViews } from './src/components/view';
import { MyTexts } from './src/components/texts';
import { MyTextInputs } from './src/components/textInputs';
import { MyPressable } from './src/components/pressable';
import { MyCard } from './src/components/card';
import { MyScrollView } from './src/components/scrollview';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.flag}>
<View style={styles.blue}></View>
<View style={styles.yellow}></View>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
<MyScrollView/>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  containerS: {
    flexDirection:'row'
  },
  flag: {
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',

  },
  blue: {
    width: 100,
    height: 100,
    transform: [{rotate: '45deg'}],
    backgroundColor: 'black',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 12,
},
shadowOpacity: 0.8,
shadowRadius: 16.00,

elevation: 24,
  },
  yellow: {
    width: 50,
    height: 50,
    transform: [{rotate: '45deg'}],
    backgroundColor: 'yellow',
  },
  /*red: {
    flex:1,
    backgroundColor: 'red',
  }*/

});

export default App;
