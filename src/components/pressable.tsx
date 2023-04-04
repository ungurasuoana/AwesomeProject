import { View, Pressable, Text, StyleSheet } from "react-native"

export const MyPressable = () => {
    const onPress1 = () => {console.log('pressed')}
    return (
        <View style={styles.container}>
            <Pressable style={styles.thePressable}
                onPress={onPress1}>
                <Text>Press me</Text>
            </Pressable>
            <Pressable style={ ({pressed}) => [
{
opacity: pressed? 0.5 : 1,
},
styles.thePressable]}
                >
                <Text>Reduce opacity</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
    },
    thePressable: {
        padding: 10,
        width: 200,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        margin: 10,
    },
})