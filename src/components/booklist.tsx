import { View, StyleSheet, ImageBackground, Image, Pressable, Text } from "react-native/";
import { useState } from "react";
import { BookListItem } from "../types/booklistItem";
import { More } from "../assets/icons";

interface Props {
    item: BookListItem
    value: number
    onPress: (value: number) => void
    onTouch: () => void
}

export const BookList = (props: Props) => {
    const heart0 = require('../assets/pics/heart2.png')
    const heart1 = require('../assets/pics/heart1.png')

    const [favs, setFavs] = useState(1)
    const [pressed, setPressed] = useState(false)
    const [img, setImg] = useState(heart0)
    const [more, setMore] = useState(true)

    const onPress = () => {
        console.log(pressed)
        if (!pressed) {
            setImg(heart1),
                setPressed(true),
                setFavs(-1)
        }
        else if (pressed) {
            setImg(heart0),
                setPressed(false),
                setFavs(1)
        }
        else
            setFavs(0)

        props.onPress(props.value + favs)
    }

    return (
        <View style={styles.container}>
            <View style={styles.imgContainer}>
                <ImageBackground style={styles.img} source={props.item.image}>
                    <View style={styles.pressContainer}>
                        <Pressable style={styles.press}
                            onPress={onPress}>
                            <Image source={img} style={styles.icon} />
                        </Pressable>
                    </View>
                </ImageBackground>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Pressable onPress={() => props.onTouch()}
                    style={styles.button}>
                    <Text style={styles.textButton}>Read More</Text>
                    <More width={15} height={15} />
                </Pressable>
                {/* // setMore(!more)}>
                    // {more ?
                    //     <Text numberOfLines={3} style={styles.description}>
                    //         {props.item.description}
                    //     </Text>
                    //     :
                    //     <Text style={styles.description}>
                    //         {props.item.description}
                    //     </Text>
                    // }
                // </Pressable> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 8
    },
    imgContainer: {
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    img: {
        width: 350,
        height: 250,
        borderRadius: 30,
        overflow: 'hidden',
    },
    pressContainer: {
        alignItems: 'flex-end',
    },
    press: {
        width: 50,
        height: 50,
        marginTop: 5,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    icon: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center'
    },
    description: {
        color: 'black'
    },
    button: {
        flexDirection: 'row',
        marginTop: 10,
        width: 300,
        height: 45,
        backgroundColor: '#fef2ff',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: "black",
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.58,
        shadowRadius: 10,
        elevation: 10,
    },
    textButton: {
        color: 'black', 
        fontSize: 15, 
        fontWeight: 'bold', 
        marginRight: 5}

})