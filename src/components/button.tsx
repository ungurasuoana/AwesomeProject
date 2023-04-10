import { Pressable, View, StyleSheet, Alert, Text } from "react-native/"

interface Props {
    email: string
    password: string
}

export const MyButton = (props:Props) => {
    const showAlert = () => {
        Alert.alert(props.email, props.password, [
        {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
        ])
       }
       
    return (
        <View>
            <Pressable style={styles.press}
            onPress={showAlert}
            ><Text>Login</Text></Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    press: {
        backgroundColor: 'blue',
        height: 50,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    }
})