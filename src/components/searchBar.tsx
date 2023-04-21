import { useEffect, useState } from "react"
import { TextInput } from "react-native-gesture-handler"
import { View } from "react-native"
import { useDebounce } from "../hooks/use-debounce.hook"
import { useConnection } from "../hooks/use-connection"

export const SearchBar = () => {
    const [search, setSearch] = useState<string>('')

    const searchVal = useDebounce<string>(search, 1000)

    const connection = useConnection()

    useEffect(() => {
        console.log(searchVal)
    }, [searchVal])

    useEffect(() => {
        console.log(connection)
    }, [connection])

    return(
        <View style={{backgroundColor: 'pink', height: 100, justifyContent: 'center', alignItems: 'center'}}>
        <TextInput value={search} onChangeText={setSearch}
        style={{width: '90%', height: 30, backgroundColor: 'white'}}/>
        </View>
    )
}