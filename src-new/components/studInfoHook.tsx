import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"
import { InputRef } from "../types/InputRef"

export const StudInfoHook = forwardRef((props ,ref: ForwardedRef<InputRef>) => {
    const [faculty, setFaculty] = useState('')
    const [year, setYear] = useState('')
    const [color, setColor] = useState('transparent')

    useImperativeHandle(ref, (): InputRef => ({
        getData: () => ({ faculty, year }),
        setColor: (color) => {setColor(color)}
    }))

    const onChangeFaculty = (value:string) => setFaculty(value)
    const onChangeYear = (value:string) => setYear(value)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Student Information
            </Text>
            <TextInput
                value={faculty}
                onChangeText={onChangeFaculty}
                style={[styles.input, {backgroundColor: color}]}
                placeholder="Faculty"
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={year}
                onChangeText={onChangeYear}
                style={[styles.input, {backgroundColor: color}]}
                placeholder="Year"
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