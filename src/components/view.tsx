import { StyleSheet, View } from "react-native"

export const MyViews = () => {
    /*const onLayout = (e) => {
        console.log(e.nativeEvent.layout)
    }*/
    return (
        <View style={styles.container}>
            <View style={styles.square} /*onLayout={onLayout}*/> 
            <View style={styles.top}/>
            <View style={styles.buttom}>
                <View style={styles.left}/>
                <View style={styles.right}/>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    square: {
        width: 300,
        height: 200,
        borderWidth: 15,
        borderColor: 'red',
        borderTopLeftRadius: 20,
        backgroundColor: 'pink',
        borderBottomRightRadius: 20,
    },
    top: {
        flex: 2,
        backgroundColor: 'blue'
    },
    buttom: {
       flex: 1,
       flexDirection: 'row',
    },
    left: {
        flex: 5,
        backgroundColor:'white'
    },
    right: {
        flex: 5,
        backgroundColor:'black'
    },
})