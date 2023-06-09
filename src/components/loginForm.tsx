import { View, Text, TextInput, Pressable, StyleSheet, ImageBackground, Image, Linking } from "react-native/";
import { MyEmail } from "./email";
import { MyPassword } from "./password";
import { ForwardedRef, forwardRef, useImperativeHandle, useRef, useState } from "react";
import { MyButton } from "./button";
import { HomeIcon } from "../assets/icons";
import { LoginFormRef } from "../types/LoginFormRef";

interface Props {
    onLogin?: () => void;
}

export const LoginForm = forwardRef((props: Props, ref: ForwardedRef<LoginFormRef>) => {
    const background = require('../assets/pics/background.jpg')
    const backIcon = require('../assets/pics/icon2.png')

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    useImperativeHandle(ref, () : LoginFormRef => ({
        getData: () => ({ email, pass }),
        setData: (email: string, pass: string) => { setEmail(email), setPass(pass) }
    }))

    const passRef = useRef<TextInput>(null)

    const onChangeEmail = (emailNew: string) => { setEmail(emailNew) }
    const onChangePass = (passNew: string) => { setPass(passNew) }
    return (
        <View style={styles.container}>
            {/* <ImageBackground source={background} style={styles.backImg}> */}
            <View style={styles.top}>
                {/* <Image source={backIcon} style={styles.backIcon}/> */}
                <HomeIcon width={50} height={50} />
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.inputs}>
                <MyEmail onChange={onChangeEmail} email={email} />
                {/* <TextInput style={{
                        width: '99%',
                        borderBottomWidth: 2,
                        color: 'black',
                        height: 40
                    }}
                    onSubmitEditing={() => passRef?.current?.focus()}
                    /> */}
            </View>
            <View style={styles.inputs}>
                <MyPassword onChange={onChangePass} password={pass} />
                {/* <TextInput style={{
                        width: '99%',
                        borderBottomWidth: 2,
                        color: 'black',
                        height: 40
                    }}
                    ref={passRef}
                    /> */}
            </View>
            <View>
            </View>
            {/* </ImageBackground> */}
        </View>
    )
})

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
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