import { StyleSheet, Text, View, FlatList, ListRenderItemInfo, ImageBackground
} from 'react-native';
import React, { useState } from 'react';
import { data } from '../components/listitem';
import { BookList } from '../components/booklist';
import { BookListItem } from '../types/booklistItem';

export const BookApp = () => {
    const backgr = require('../assets/backgr.png')

    const [calc, setCalc] = useState(0)

    const onPress = (value: number) => {
        setCalc(value)
    }

    const renderItem = ({ item }: ListRenderItemInfo<BookListItem>) =>
        <BookList item={item} value={calc} onPress={onPress} />

    return (
        <View style={styles.list}>
            <FlatList
                data={data}
                renderItem={renderItem}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <ImageBackground style={styles.headerImg} source={backgr}>
                            <Text style={styles.title}>THE BOOKSTORE</Text>
                        </ImageBackground>
                    </View>}
                ListFooterComponent={
                    <View style={{ alignItems: 'center' }}>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>The number of favorite items is: {calc}</Text>
                        </View>
                    </View>}
                ItemSeparatorComponent={() => <View style={styles.separator} />}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee3ff',
    },
    header: {
        marginTop: 1,
        marginBottom: 5,
        marginRight: 2,
        marginLeft: 2,
        alignItems: 'center',
    },
    headerImg: {
        height: 160,
        width: 300,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontStyle: 'italic',
        textShadowColor: 'black',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
    },
    footer: {
        borderWidth: 1,
        borderRadius: 20,
        height: 50,
        width: 350,
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 'bold',
        marginBottom: 2,
    },
    footerText: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
    },
    separator: {
        backgroundColor: 'black',
        height: 2.5,
        margin: 10,
    }
});
