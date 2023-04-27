import { StackScreenProps } from "@react-navigation/stack";
import { ForwardedRef, forwardRef, useImperativeHandle, useState } from "react";
import { StyleSheet, Text, View } from "react-native"
import { BookRoutes, BookRoutesProps } from "../navigation/routes/book-routes";
import { BookDetailsRef } from "../types/BookDetails";

export const Content = forwardRef((props: {name: string, description: string}, ref: ForwardedRef<BookDetailsRef>) => {

    const {name, description} = props;

    const [back, setBack] = useState<string>('#eee3ff');

    useImperativeHandle(ref, () : BookDetailsRef => ({
        setBackground: (color: string) => { setBack(color) }
    }))

    return (
        <View style= {[styles.imgContainer, {backgroundColor: back}]}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
        </View>
    )
})

const styles = StyleSheet.create({
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