import { StyleSheet, Text, TextInput, View } from "react-native"

interface Props {
    faculty: string
    year: string
    onFaculty: (value:string) => void
    onYear: (value:string) => void
    color: string
}

export const StudInfoState =(props: Props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Student Information
            </Text>
            <TextInput
                value={props.faculty}
                onChangeText={(value) => props.onFaculty(value)}
                style={[styles.input, {borderColor: props.color}]}
                placeholder="Faculty"
                placeholderTextColor={'grey'}
            />
            <TextInput
                value={props.year}
                onChangeText={(value) => props.onYear(value)}
                style={[styles.input, {borderColor: props.color}]}
                placeholder="Year"
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