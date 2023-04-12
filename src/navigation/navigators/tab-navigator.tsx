import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabRouteProps, TabRoutes } from "../routes/tab-routes";
import { LogBox, Pressable, View } from "react-native/";
import { AccountIcon, BooksIcon, HomeIcon } from "../../assets/icons";
import { AppNavigator } from "./app-navigator";
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../routes/app-routes";
import { BookApp } from "../../components/bookApp";
import { TopNavigator } from "./top-navigator";
LogBox.ignoreAllLogs()

const Tab = createBottomTabNavigator<TabRouteProps>()


export const BottomTabs = () => {
    const navigation = useNavigation()
    return (
        <Tab.Navigator screenOptions={{ title: 'Hello' }}>
            <Tab.Screen name={TabRoutes.Home}
                component={() => <View style={{ flex: 1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable style={{ width: 50, height: 30, backgroundColor: 'white' }}
                        onPress={() => navigation.navigate(AppRoutes.Home)}></Pressable>
                </View>}
                options={{
                    tabBarLabel: 'Home Page',
                    tabBarIcon: () => <HomeIcon width={25} height={25} />,
                    headerTransparent: true
                }} />
            <Tab.Screen name={TabRoutes.Account}
                component={TopNavigator}
                options={{
                    tabBarLabel: 'Account Page',
                    tabBarIcon: () => <AccountIcon width={25} height={25} />
                }} />
            <Tab.Screen name={TabRoutes.Books}
                component={BookApp}
                options={{
                    tabBarLabel: 'Books Page',
                    tabBarIcon: () => <BooksIcon width={25} height={25} />,
                    headerTransparent: true
                }} />
        </Tab.Navigator>
    )
}
