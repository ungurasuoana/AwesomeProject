import { TextInput, View, StyleSheet, Text, Image } from "react-native"

export const MyTextInputs = () => {
    const source = require('../assets/cat.jpg')
    const onChangeText = (value:String) => { console.log(value) }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.inputStyle}
                    onChangeText={(text) => {onChangeText(text)}}
                    placeholder="Password"
                    placeholderTextColor="green"
                    secureTextEntry={true}
                ></TextInput>
                <Image style={styles.myImage} source={source} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    inputContainer: {
        flex: 0.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
    },
    theText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black',
    },
    inputStyle: {
        flex: 4,
        width: 200,
        height: 50,
        color: 'black',
    },
    myImage: {
        flex: 1,
        margin: 2,
        width: 30,
        height: 40,
        borderRadius: 10,
    },
})