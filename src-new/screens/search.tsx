import { useEffect, useState } from "react"
import { StyleSheet, View } from "react-native"
import { TextInput } from "react-native-gesture-handler"
import { useSearch } from "../hooks/use-search"
import { data } from "../../src/components/listitem"

export const Search = () => {
    const [search, setSearch] = useState<string>('')

    const searchFilter = useSearch(data, search, 'title')

    useEffect(() => {
        console.log(searchFilter)
    }, [searchFilter])


    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={search}
                onChangeText={setSearch}
                placeholder="Search for a Book"
                placeholderTextColor='grey'
            />
        </View>
    )
}

export const styles = StyleSheet.create({
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
})