import { Alert, Pressable, StyleSheet, Text, View } from "react-native"
import { PersInfoState } from "../components/persInfoState"
import { StudInfoState } from "../components/studInfoState"
import { useState } from "react"

export const StateForm = () => {
    const [firstN, setFirstN] = useState('')
    const [lastN, setLastN] = useState('')
    const [color, setColor] = useState('black')
    const [faculty, setFaculty] = useState('')
    const [year, setYear] = useState('')

    const onChangeFaculty = (value: string) => setFaculty(value)
    const onChangeYear = (value: string) => setYear(value)
    const onChangeFName = (value: string) => setFirstN(value)
    const onChangeLName = (value: string) => setLastN(value)

    const onPress = () => {
        if (firstN === '' || lastN === '' || faculty === '' || year === '') {
            setColor('red')
        }
        else {
            setColor('black')
            Alert.alert('Information',
                `First name is: ${firstN} and last name is: ${lastN}. Faculty is: ${faculty} and year is: ${year}`,
                [{
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK' },])
        }
    }

    return (
        <View style={styles.container}>
            <PersInfoState
                firstName={firstN}
                lastName={lastN}
                onFirstName={onChangeFName}
                onLastName={onChangeLName}
                color={color}
            />
            <StudInfoState
                faculty={faculty}
                year={year}
                onFaculty={onChangeFaculty}
                onYear={onChangeYear}
                color={color}
            />
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>
                    Register
                </Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    text: {
        color: 'black'
    }
})