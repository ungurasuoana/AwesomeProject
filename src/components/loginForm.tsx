import { View, Text, TextInput, Pressable, StyleSheet } from "react-native/";
import { MyEmail } from "./email";
import { MyPassword } from "./password";
import { useState } from "react";
import { MyButton } from "./button";

export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const onChangeEmail = (emailNew:string) => {setEmail(emailNew)}
    const onChangePass = (passNew:string) => {setPass(passNew)}
console.log(email)
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.inputView}>
                <MyEmail value={email} onChange={onChangeEmail}/>
            </View>
            <View style={styles.inputView}>
                <MyPassword value={pass} onChange={onChangePass}/>
            </View>
            <View>
                <MyButton email={email} password={pass}/> 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'black',
        fontWeight: 'bold',
    },
    tag: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    inputView: {
        marginLeft: 10,

    },
})