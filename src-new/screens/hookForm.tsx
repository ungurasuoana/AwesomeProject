import { Alert, Pressable, StyleSheet, Text, View } from "react-native"
import { PersInfoHook } from "../components/persInfoHook"
import { StudInfoHook } from "../components/studInfoHook"
import { useEffect, useRef } from "react"
import { InputRef } from "../types/InputRef"
import { PersInfoRef } from "../types/PersInfoRef"

export const HookForm = () => {

    const persRef = useRef<PersInfoRef>(null)
    const studref = useRef<InputRef>(null)
    
    const firstName = persRef.current?.getData().firstN
    const lastName = persRef.current?.getData().lastN
    const faculty = studref.current?.getData().faculty
    const year = studref.current?.getData().year

    const onPress = () => 
    { 
//         if(firstName === undefined)
//         {persRef.current?.setColor('red','transparent')
//  }       else if (lastName === undefined)
//         {persRef.current?.setColor('transparent','red')}
//         else
        {Alert.alert('Information',
        `First name is: ${firstName} and last name is: ${lastName}. Faculty is: ${faculty} and year is: ${year}`, 
        [   {   text: 'Cancel',
                style: 'cancel',
            },
            { text: 'OK' },])}
    }


    return (
        <View style={styles.container}>
            <PersInfoHook ref={persRef} />
            <StudInfoHook ref={studref} />
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>
                    Register
                </Text>
            </Pressable>
        </View>
    )
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    text: {
        color: 'black'
    }
})