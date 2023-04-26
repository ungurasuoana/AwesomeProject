import { StyleSheet, Text, View, FlatList, ListRenderItemInfo, ImageBackground, TextInput
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { data } from '../components/listitem';
import { BookList } from '../components/booklist';
import { BookListItem } from '../types/booklistItem';
import { Card } from '../screens/card';
import { useNavigation } from '@react-navigation/native';
import { BookRoutes } from '../navigation/routes/book-routes';
import { SearchBar } from './searchBar';
import { Search } from '../../src-new/screens/search';
import { useSearch } from '../../src-new/hooks/use-search';
import { BookState, useBookStore } from '../../src-new/store/useBookStore';
import { MMKV } from 'react-native-mmkv';


export const BookApp = () => {
    const backgr = require('../assets/pics/backgr.png')

    const [calc, setCalc] = useState<number>(0)

    useEffect(() => {
        console.log(calc)
        return () => console.log('bye')
    }, [calc])

    const onPress = (value: number) => {
        setCalc(value)
    }

    const navigation = useNavigation()

    const [search, setSearch] = useState<string>('')

    const searchFilter = useSearch(data, search, 'title')

    useEffect(() => {
        //console.log(searchFilter)
        console.log()
    }, [searchFilter])
    
    const {books, setCurrentBook} = useBookStore( (state: BookState) => ({ books: state.books , setCurrentBook: state.setCurrentBook })) //destructuring

    const storage = new MMKV
    useEffect(() => {
       storage.set('alo', 'a')
    },[])
    
    const renderItem = ({ item }: ListRenderItemInfo<BookListItem>) =>
        <BookList item={item} value={calc} onPress={onPress} onTouch={() => { navigation.navigate(BookRoutes.Card)}}/>
        // ()=>navigation.navigate(BookRoutes.Card, item) setCurrentBook(item),
    return (
        <View style={styles.list}>
            <FlatList
                data={books}
                renderItem={renderItem}
                // ListHeaderComponent={
                //     <View style={styles.header}>
                //         <ImageBackground style={styles.headerImg} source={backgr}/>
                //         <Text style={styles.title}>The Bookstore</Text>
                //     </View>}
                ListHeaderComponent={ 
                    <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        value={search}
                        onChangeText={setSearch}
                        placeholder="Search for a Book"
                        placeholderTextColor='grey'
                    />
                    
                    {/* {searchFilter.map((item) => <Text>{item.title}</Text>)} */}
                </View>
                }
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
        height: 70,
        marginTop: 1,
        marginBottom: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderBottomStartRadius: 15,
        borderBottomEndRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#DAC8F3'
    },
    headerImg: {
        height: 45,
        width: 45,
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
        textShadowOffset: { width: -2, height: 2 },
        textShadowRadius: 5,
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
        backgroundColor: 'grey',
        height: 2.5,
        margin: 5,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        justifyContent: 'center'
    },
    input: {
        width: '90%',
        borderBottomWidth: 2,
        color: 'black',
        height: 40
    }
});
