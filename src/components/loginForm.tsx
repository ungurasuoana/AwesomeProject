import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image, Linking } from "react-native/";
import { MyEmail } from "./email";
import { MyPassword } from "./password";
import { useState } from "react";
import { MyButton } from "./button";

interface Props {
    onLogin: () => void;
}

export const LoginForm = (props: Props) => {
    const background = require('../assets/background.jpg')
    const backIcon = require('../assets/icon2.png')

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const onChangeEmail = (emailNew: string) => { setEmail(emailNew) }
    const onChangePass = (passNew: string) => { setPass(passNew) }
    return (
        <View style={styles.container}>
            <ImageBackground source={background} style={styles.backImg}>
                <View style={styles.top}>
                    <Image source={backIcon} style={styles.backIcon}/>
                    <Text style={styles.title}>Login</Text>
                </View>
                <View style={styles.inputs}>
                    <MyEmail onChange={onChangeEmail} />
                </View>
                <View style={styles.inputs}>
                    <MyPassword onChange={onChangePass} />
                </View>
                <View>
                    <MyButton email={email} password={pass} onLogin={props.onLogin}/>
                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    backImg: {
        width: '100%',
        height: '100%',
    },
    backIcon: {
        width: 120,
        height: 120,
    },
    top: {
        height: 300,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        textShadowColor: 'black',
        textShadowOffset: { width: -3, height: 1 },
        textShadowRadius: 5,
        marginBottom: 10,
    },
    inputs: {
        height: 70,
        justifyContent: 'flex-start',
        marginLeft: 10,
        marginRight: 10,
    },
})