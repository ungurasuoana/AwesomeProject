import { View, Text, StyleSheet } from "react-native"
import { HomeFull } from "../assets/icons"

interface Props {
    name: string
    color: string
}

export const MyScreen = (props: Props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, { backgroundColor: props.color}]}>This is the {props.name} screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'transparent',
        padding: 20
    }
})