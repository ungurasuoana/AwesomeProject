import { useEffect } from "react"
import { View, Text, Image, StyleSheet } from "react-native"

export const Card = (props: any) => {
    //useEffect(()=> { console.log(props.route.params)}, [])
    const {id, image, title, description} = props.route.params;

    return (
        <View style={styles.container}>
            <View style= {styles.imgContainer}>
            <Text style={styles.title}>{title}</Text>
            <Image source={image} style={styles.img}/>
            <Text style={styles.description}>{description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#eee3ff',
        borderRadius: 20,
        justifyContent: 'flex-start',
    },
    imgContainer: {
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#eee3ff',
        paddingHorizontal: 5,
        paddingTop: 10,
        paddingBottom: 10,        
    },
    img: {
        width: 350,
        height: 250,
        borderRadius: 40,
        overflow: 'hidden',
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        marginBottom: 5
    },
    description: {
        color: 'black',
        fontSize: 16
    },
})