import { ImageBackground, View } from "react-native"
import { LoginForm } from "../components/loginForm"
import { MyButton } from "../components/button"
import { forwardRef, useImperativeHandle, useRef } from "react"
import { LoginFormRef } from "../types/LoginFormRef"

export const Login = () => {
    const background = require('../assets/pics/background.jpg')

    const loginRef = useRef<LoginFormRef>(null)

    const onLogin = () => {
        loginRef.current?.setData('lala','nana')
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={background} style={{ width: '100%', height: '100%', alignItems: 'center' }}>
                <LoginForm ref={loginRef}/>
                <MyButton onLogin={onLogin} />
            </ImageBackground>
        </View>
    )
}