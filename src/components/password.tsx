import { useState } from "react"
import { View, Text, TextInput, StyleSheet, Image, Pressable } from "react-native/"

interface Props {
    value: string
    onChange: (value: string) => void
}

export const MyPassword = (props: Props) => {
    const icon0 = require('../assets/eye0.png')
    const icon1 = require('../assets/eye1.png')
    const [secure, setSecure] = useState(true)

    return (
        <View>
            <Text style={styles.tag}>Password</Text>
            <View style={styles.container}>
            <TextInput style={styles.inputText}
                placeholder="Password"
                placeholderTextColor="grey"
                secureTextEntry={secure}
                onChangeText={(pass) => props.onChange(props.value = pass)}
            />
            <Pressable onPress={() => setSecure(!secure)}>   
            {secure? 
            <Image style={styles.myImage} source={icon0} /> :
            <Image style={styles.myImage} source={icon1} />}     
            </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: 'grey',
        borderBottomWidth: 2,
        marginRight: 5
    } ,
    tag: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    inputText: {
        width: '90%',
        color: 'black',
        height: 40
    },
    myImage: {
        width: 30,
        height: 40,
        resizeMode: 'contain'
    },
})