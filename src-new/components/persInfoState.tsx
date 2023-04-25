import { useState } from "react"
import { StyleSheet, TextInput, View, Text } from "react-native"

interface Props {
    firstName: string
    lastName: string
    onFirstName: (value:string) => void
    onLastName: (value:string) => void
    color: string
}

export const PersInfoState = (props: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Personal Information
            </Text>
            <TextInput
                value={props.firstName}
                onChangeText={(value) => props.onFirstName(value)}
                style={[styles.input, {borderColor: props.color}]}
                placeholder="First Name"
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={props.lastName}
                onChangeText={(value) => props.onLastName(value)}
                style={[styles.input, {borderColor: props.color}]}
                placeholder="Last Name"
                placeholderTextColor={'grey'}
            />
        </View>
    )
}

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