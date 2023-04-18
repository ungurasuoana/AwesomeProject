import { HeaderStyleInterpolators, createStackNavigator } from "@react-navigation/stack";
import { BookRoutes, BookRoutesProps } from "../routes/book-routes";
import { Book } from "../../screens/book";
import { CustomNavigation } from "./custom-navigator";
import { Card } from "../../screens/card";
import { Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { BackIcon } from "../../assets/icons";

const Stack = createStackNavigator<BookRoutesProps>()

export const BookNavigation = () => {
    const navigation = useNavigation()

    return (
        <Stack.Navigator
            screenOptions={{
                headerTitleAlign: 'center',
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                    fontStyle: 'italic',
                    textShadowColor: 'black',
                    textShadowOffset: { width: -2, height: 2 },
                    textShadowRadius: 5,
                },
                headerStyle: {
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    height: 60,
                    backgroundColor: '#DAC8F3'
                },
                headerLeft: () =>
                    <Pressable style={styles.headerBotton}
                        onPress={() => { navigation.goBack() }}>
                        <BackIcon width={35} height={35} />
                    </Pressable>,
            }}>
            <Stack.Screen
                name={BookRoutes.C}
                component={CustomNavigation}
                options={{
                    headerShown: false
                }}
            />
            <Stack.Screen
                name={BookRoutes.Home}
                component={Book}
                options={{
                    headerTitle: 'The Bookstore'
                }}
            />
            <Stack.Screen
                name={BookRoutes.Card}
                component={Card}
                options={{
                    headerTitle: 'Informational Card'
                }} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerBotton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
    },
})