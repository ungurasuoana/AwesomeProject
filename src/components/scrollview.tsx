import { View, ScrollView, Text, StyleSheet, Image } from "react-native"

export const MyScrollView = () => {
    const saved = require('../assets/food1.jpg')
    const heart = require('../assets/food2.jpg')
    const comment = require('../assets/food3.jpg')
    const send = require('../assets/food4.jpg')
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>
                    Beef and Mushrooms with Smashed Potatoes
                </Text>
                <View style={styles.carousel}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <Image style={styles.theImage} source={saved} />
                        <Image style={styles.theImage} source={heart} />
                        <Image style={styles.theImage} source={comment} />
                        <Image style={styles.theImage} source={send} />
                    </ScrollView>
                </View>
                <Text style={styles.text}>
                    Potluck Macaroni and Cheese
                </Text>
                <View style={styles.carousel}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <Image style={styles.theImage} source={saved} />
                        <Image style={styles.theImage} source={heart} />
                        <Image style={styles.theImage} source={comment} />
                        <Image style={styles.theImage} source={send} />
                    </ScrollView>
                </View>
                <Text style={styles.text}>
                    Favorite Chicken Potpie
                </Text>
                <View style={styles.carousel}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <Image style={styles.theImage} source={saved} />
                        <Image style={styles.theImage} source={heart} />
                        <Image style={styles.theImage} source={comment} />
                        <Image style={styles.theImage} source={send} />
                    </ScrollView>
                </View>
                <Text style={styles.text}>
                    Contest-Winning Broccoli Chicken Casserole
                </Text>
                <View style={styles.carousel}>
                    <ScrollView style={styles.scrollView} horizontal={true}>
                        <Image style={styles.theImage} source={saved} />
                        <Image style={styles.theImage} source={heart} />
                        <Image style={styles.theImage} source={comment} />
                        <Image style={styles.theImage} source={send} />
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    scrollView: {
        marginHorizontal: 10,
    },
    text: {
        marginLeft: 10,
        fontSize: 20,
    },
    carousel: {
        flex: 1,
    },
    theImage: {
        width: 400,
        height: 400,
        resizeMode: 'cover'
    },
})