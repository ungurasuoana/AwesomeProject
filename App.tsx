/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert,
  FlatList,
  ListRenderItemInfo,
  Pressable
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
import { MyItem } from './src/types/Post.Interface'
import { useState } from "react";
import { MathButtons } from './src/components/buttons';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
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

  const onPress = (title: string) => {
    Alert.alert(title, '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel'
      },
      {
        text: 'OK',
        onPress: () => console.log('OK Pressed')
      },
    ])
  }

  const data: MyItem[] = [{
    id: 1,
    image: require('./src/assets/cat.jpg'),
    title: 'Cat',
    description: 'Cat'
  },
  {
    id: 2,
    image: require('./src/assets/cat.jpg'),
    title: 'Still Cat',
    description: 'Cat'
  },
  {
    id: 3,
    image: require('./src/assets/cat.jpg'),
    title: 'Surprise, a Cat',
    description: 'Cat'
  },
  {
    id: 4,
    image: require('./src/assets/cat.jpg'),
    title: 'I wonder what can it be? Cat!',
    description: 'Cat'
  }
  ]
  
const renderItem = ({item}: ListRenderItemInfo<MyItem>)=><MyCard item={item} onPress={onPress}/>

const [calc, setCalc] = useState(0)

const onPress1 = (value:number) => {
  setCalc(value+calc)
}

  return (
    <View style={styles.container}>
      <View style={styles.containerS}>
<MathButtons value={1} onPress={onPress1}/>
<MathButtons value={2} onPress={onPress1}/>
</View>
<View style={styles.sectionDescription}>
  <Text style={{color:'black'}}>{calc}</Text>
</View>
<View style={styles.containerS}> 
<MathButtons value={3} onPress={onPress1}/>
<MathButtons value={4} onPress={onPress1}/>
</View >
<View style= {styles.prss} >
<Pressable onPress={() => {setCalc(0)}}><Text>reset</Text></Pressable>
</View>
</View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
},
prss: {
  backgroundColor: 'red',
  width: 70,
height: 50,
borderRadius: 20,
justifyContent: 'center',
alignItems: 'center',
},
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
    flexDirection: 'row'
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
    transform: [{ rotate: '45deg' }],
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
    transform: [{ rotate: '45deg' }],
    backgroundColor: 'yellow',
  },
  /*red: {
    flex:1,
    backgroundColor: 'red',
  }*/

});

export default App;
