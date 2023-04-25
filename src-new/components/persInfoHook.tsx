import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react"
import { StyleSheet, TextInput, View, Text } from "react-native"
import { PersInfoRef } from "../types/PersInfoRef"

export const PersInfoHook = forwardRef((props, ref: ForwardedRef<PersInfoRef>) => {
    const [firstN, setFirstN] = useState('')
    const [lastN, setLastN] = useState('')
    const [color1, setColor1] = useState('transparent')
    const [color2, setColor2] = useState('transparent')

    useImperativeHandle(ref, (): PersInfoRef => ({
        getData: () => ({ firstN, lastN }),
        setColor: (color1:string, color2:string) => (setColor1(color1),setColor2(color2)),
    }))

    const onChangeFName = (value:string) => setFirstN(value)
    const onChangeLName = (value:string) => setLastN(value)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Personal Information
            </Text>
            <TextInput
                value={firstN}
                onChangeText={onChangeFName}
                style={[styles.input, {backgroundColor: color1}]}
                placeholder="First Name"
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={lastN}
                onChangeText={onChangeLName}
                style={[styles.input, {backgroundColor: color2}]}
                placeholder="Last Name"
                placeholderTextColor={'grey'}
            />
        </View>
    )
})

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%'
    },
    title: {
        fontSize: 20,
        color: 'black',
    },
    input: {
        width: '90%',
        borderBottomWidth: 2,
        color: 'black',
        height: 40
    }
})