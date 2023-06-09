import {
    StyleSheet, Text, View, FlatList, ListRenderItemInfo, ImageBackground, TextInput, ActivityIndicator
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
import { getBooks as fetchBooks } from '../../src-new/services/book.service';


export const BookApp = () => {
    const backgr = require('../assets/pics/backgr.png')

    const [calc, setCalc] = useState<number>(0)
    const [search, setSearch] = useState<string>('')
    const navigation = useNavigation()

    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [page, setPage] = useState(1)
    const [end, setEnd] = useState(false)
    const [refresh, setRefresh] = useState(false)

    // useEffect(() => {
    //     console.log(calc)
    //     return () => console.log('bye')
    // }, [calc])
    //  const searchFilter = useSearch(data, search, 'name')

    // useEffect(() => {
    //     //console.log(searchFilter)
    //     console.log()
    // }, [searchFilter])

    const onPress = (value: number) => {
        setCalc(value)
    }

    const { books, setCurrentBook, getBooks } = useBookStore((state: BookState) => ({
        books: state.books,
        setCurrentBook: state.setCurrentBook,
        getBooks: state.getBooks
    })) //destructuring

    // const handleFetch = async()=> {
    //     const data = fetchBooks()
    //     getBooks(data)
    // }    


    const storage = new MMKV
    useEffect(() => {
        storage.set('alo', 'a')
    }, [])

    const onEndReached = () => {
        if (!loading && !loadingMore && !end) 
        {
            setPage(page + 1)
            setLoadingMore(true)
        }
    }

    const onRefresh = () => {
        if(!loading && !loadingMore && !refresh){
            setPage(1)
            setRefresh(true)
        }
    }

    useEffect(() => {
        fetchBooks(page).then((data: []) => {
            getBooks([...books, ...data])
            setLoadingMore(false)
            setLoading(false)
            if (data.length === 0) {
                setEnd(true)
                console.log('THE END IS HERE')
            }
            if(page === 1 && refresh) {
                setRefresh(false)
                setEnd(false)
                console.log('HERE WE ARE REFRESHING')
            }
        })
    }, [page])

    

    const renderItem = ({ item }: ListRenderItemInfo<BookListItem>) =>
        <BookList item={item} value={calc} onPress={onPress} onTouch={() => { setCurrentBook(item), navigation.navigate(BookRoutes.Card) }} />
    // ()=>navigation.navigate(BookRoutes.Card, item) setCurrentBook(item),
    return (
        <View style={styles.list}>
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
            <FlatList
                data={books}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                // ListHeaderComponent={
                //     <View style={styles.header}>
                //         <ImageBackground style={styles.headerImg} source={backgr}/>
                //         <Text style={styles.title}>The Bookstore</Text>
                //     </View>}
            
                ListFooterComponent={loadingMore ? <ActivityIndicator/> : <View/>
                    // <View style={{ alignItems: 'center' }}>
                    //     <View style={styles.footer}>
                    //         <Text style={styles.footerText}>The number of favorite items is: {calc}</Text>
                    //     </View>
                    // </View>
                    }
                ItemSeparatorComponent={() => <View style={styles.separator} />}
                onEndReached={onEndReached}
                onEndReachedThreshold={0.5}
                refreshing={refresh}
                onRefresh={onRefresh}
                ListEmptyComponent={<ActivityIndicator/>}
                contentContainerStyle={ 
                    !books?.length ?
                    {flex:1, justifyContent:'center'} :
                   {} 
                }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    list: {
        backgroundColor: '#eee3ff',
        flex:1
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
        // flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom: 30,
        width: '100%',
        justifyContent: 'center',
        // marginTop:30,
    },
    input: {
        width: '90%',
        borderBottomWidth: 2,
        color: 'black',
        height: 40
    }
});
