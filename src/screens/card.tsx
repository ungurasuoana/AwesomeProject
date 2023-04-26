import { View, Text, Image, StyleSheet, Pressable } from "react-native"
import { Content } from "../components/content";
import { StackScreenProps } from "@react-navigation/stack";
import { BookRoutes, BookRoutesProps } from "../navigation/routes/book-routes";
import { useEffect, useRef } from "react";
import { BookDetailsRef } from "../types/BookDetails";
import { BookState, useBookStore } from "../../src-new/store/useBookStore";
import { MMKV } from "react-native-mmkv";

export const Card = (props: StackScreenProps<BookRoutesProps, BookRoutes.Card>) => {
    //useEffect(()=> { console.log(props.route.params)}, [])
    //const { image } = props.route?.params;
    const {book} = useBookStore( (state: BookState) => ({book: state.book}))

    const backgroundRef = useRef<BookDetailsRef>(null)

    const onPress = () => {
        const colors = ['red', 'lightblue', 'pink', 'orange'];
        const index = Math.round((Math.random())*10%colors.length);
        
        backgroundRef.current?.setBackground(colors[index])
    }
    const storage = new MMKV
    useEffect(() => {
        const res = storage.getString('alo')
        console.log(res)
    }, [])

    return (
        <View style={styles.container}>
            <Pressable onPress={onPress}>
                {book?.image && <Image source={book?.image} style={styles.img} />}
                </Pressable>
            {book && <Content {...book} ref={backgroundRef}/>}
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
    img: {
        width: 350,
        height: 250,
        borderRadius: 40,
        overflow: 'hidden',
    },
})