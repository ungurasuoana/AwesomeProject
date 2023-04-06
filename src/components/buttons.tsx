import { View, StyleSheet, Text, Pressable } from "react-native/";

interface Props {
    value: number;
    onPress: (value: number) => void;
}

export const MathButtons = (props:Props) => {

    return (
<View style={styles.container}>
<Pressable style={styles.newB} onPress={() => props.onPress(props.value)}><Text>{props.value}</Text></Pressable>
</View>
)
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    newB: {
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'violet',
      },
})