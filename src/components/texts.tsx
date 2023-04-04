import { Text, View, StyleSheet, Pressable, Linking, Image } from "react-native"

export const MyTexts = () => {
    const onPress = () => {
        Linking.openURL('https://www.facebook.com/')
    }
    const image = require('../assets/cat.jpg')
    return (
        <View style={styles.container}> 
        <Image style={styles.imagine} 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1024px-Cat_August_2010-4.jpg' }}/>
       <Image style={styles.imagine} 
       source={image}/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    theText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    theText1: {
        fontSize: 20,
        color: 'blue',
    },
    imagine: {
        width: 100,
        height: 50,
    }
})