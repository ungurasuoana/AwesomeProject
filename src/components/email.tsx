import { useState } from "react"
import { TextInput, View, StyleSheet, Text } from "react-native/"

interface Props {
    value: string
    onChange: (value: string) => void
}

export const MyEmail = (props: Props) => {
    const [color, setColor] = useState('grey')

    const verify = (verif: string) => {
        if (verif.includes('@') == true)
            setColor('green'),
                props.onChange(props.value = verif)
        else if (verif.includes('@') == false)
            setColor('red'),
                props.onChange(props.value = 'EMAIL IS INCORRECT')
        else
            console.log('ajutor')
    }

    return (
        <View>
            <Text style={styles.tag}>Email</Text>
            <TextInput style={{ width: '99%', borderColor: color, borderBottomWidth: 1, color: 'black', height: 40 }}
                placeholder="Email"
                placeholderTextColor="grey"
                keyboardType="email-address"
                onChangeText={verify}
            ></TextInput>
        </View>
    )
}

const styles = StyleSheet.create({
    tag: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
    },
    inputView: {
        marginLeft: 10,

    },
    inputText: {
        width: '99%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        color: 'black',
        height: 40
    }
})