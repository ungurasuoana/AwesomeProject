import { Alert, Image, Pressable, StyleSheet, Text, View } from "react-native"

export const MyCard = () => {
    const source = require('../assets/cat.jpg')
    const heart = require('../assets/heart.png')
    const comment = require('../assets/comment.png')
    const send = require('../assets/sendd.png')
    const saved = require('../assets/saved.png')

    const showAlert = () => {
        Alert.alert('Informational alert', 'The picture has been pressed! Congrats!', [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            },
        ])
    }
    return (
        <View style={styles.container}>
            <View style={styles.theCard}>
                <View style={styles.top}>
                    <Image style={styles.profilePic}
                        source={source} />
                    <Text style={styles.theText}>john.doe2345</Text>
                </View>
                <Pressable style={styles.container}
                    onPress={showAlert}>
                    <Image style={styles.theImage}
                        source={source} />
                </Pressable>
                <View style={styles.theButtons}>
                    <View style={styles.theButtonsLeft}>
                        <Pressable
                            style={({ pressed }) => [
                                {
                                    opacity: pressed ? 0.2 : 1,
                                },
                                styles.thePressable]}>
                            <Image style={styles.icon} source={heart} />
                            <Text>Like</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [
                            {
                                opacity: pressed ? 0.2 : 1,
                            },
                            styles.thePressable]}>
                            <Image style={styles.icon} source={comment} />
                            <Text>Comment</Text>
                        </Pressable>
                        <Pressable style={({ pressed }) => [
                            {
                                opacity: pressed ? 0.2 : 1,
                            },
                            styles.thePressable]}>
                            <Image style={styles.icon} source={send} />
                            <Text>Send</Text>
                        </Pressable>
                    </View>
                    <View style={styles.theButtonsRight}>
                        <Pressable style={({ pressed }) => [
                            {
                                opacity: pressed ? 0.2 : 1,
                            },
                            styles.thePressable]}>
                            <Image style={styles.icon} source={saved} />
                            <Text>Save</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.top}>
                    <Text style={styles.theText}>hello this is the new pic I took, I'm so cool</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b2b2e',
    },
    theCard: {
        flex: 1,
        height: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2b2b2e',
        shadowColor: "white",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.8,
        shadowRadius: 5.46,
        elevation: 1
    },
    top: {
        flex: 0.2,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#2b2b2e',
    },
    profilePic: {
        width: 30,
        height: 30,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: 'violet',
        marginLeft: 10,
    },
    theImage: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    theText: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    theButtons: {
        flex: 0.3,
        flexDirection: 'row',
    },
    theButtonsLeft: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    theButtonsRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginRight: 5,
    },
    thePressable: {
        flex: 0.3,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 30,
        height: 30,
    }
})