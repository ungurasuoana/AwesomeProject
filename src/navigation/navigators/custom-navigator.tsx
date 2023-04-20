import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomRouteProps, CustomRoutes } from "../routes/custom-routes";
import { ExploreScreen, HomeScreen, SettingScreen } from "../../screens/screens";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { ExploreFull, ExploreIcon, HomeFull, HomeIcon, Menu, SettingFull, SettingIcon } from "../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { BookRoutes } from "../routes/book-routes";

const Tab = createBottomTabNavigator<CustomRouteProps>()

export const CustomNavigation = () => {
    const navigation = useNavigation()

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    marginBottom: 20,
                    left: 25,
                    right: 25,
                    height: 60,
                    backgroundColor: '#eee3ff',
                    borderTopWidth: 0,
                    // borderWidth: 1.5,
                    // borderBottomWidth: 2,
                    // borderTopColor: 'black',
                    // borderColor: 'black',
                    position: 'absolute',
                    borderRadius: 25,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,
                    elevation: 12,
                },
                headerRight: () =>
                    <Pressable style={styles.headerBotton}
                        onPress={() => { navigation.navigate(BookRoutes.Home) }}>
                        <Menu width={35} height={35} />
                    </Pressable>,
                headerStyle: {
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderColor: 'black',
                    borderBottomWidth: 1,
                    height: 110,
                    backgroundColor: '#eee3ff'
                },
                tabBarItemStyle: {
                    borderRadius: 25,
                },
                headerTitleAlign: 'center',
                tabBarActiveTintColor: 'white',
                tabBarLabelPosition: 'beside-icon',
                tabBarLabelStyle: {
                    fontSize: 14,
                    fontWeight: 'bold',
                }
            }}
        >

            <Tab.Screen
                name={CustomRoutes.Home}
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <HomeFull width={25} height={25} /> :
                        <HomeFull width={35} height={35} />,
                    tabBarLabel: ({ focused }) => focused ?
                        <View style={styles.container}>
                            <Text style={styles.text}>{CustomRoutes.Home}</Text>
                        </View>
                        : <Text></Text>,
                    tabBarItemStyle: {
                        borderRightColor: 'white',
                        borderRightWidth: 1,
                        height: '80%',
                        marginTop: 15,
                    }
                }}
            />
            <Tab.Screen
                name={CustomRoutes.Explore}
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <ExploreFull width={25} height={25} /> :
                        <ExploreFull width={35} height={35} />,

                    tabBarLabel: ({ focused }) => focused ?
                        <View style={styles.container}>
                            <Text style={styles.text}>{CustomRoutes.Explore}</Text>
                        </View> :
                        <Text></Text>,
                    tabBarItemStyle: {
                        borderRightColor: 'white',
                        borderRightWidth: 1,
                        height: '80%',
                        marginTop: 15,
                    }

                }}
            />
            <Tab.Screen
                name={CustomRoutes.Setting}
                component={SettingScreen}
                options={{
                    tabBarIcon: ({ focused }) => focused ?
                        <SettingFull width={25} height={25} /> :
                        <SettingFull width={35} height={35} />,
                    tabBarLabel: ({ focused }) => focused ?
                        <View style={styles.container}>
                            <Text style={styles.text}>{CustomRoutes.Setting}</Text>
                        </View> :
                        <Text></Text>,
                    tabBarItemStyle: {
                        height: '80%',
                        marginTop: 15,
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    headerBotton: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    container: {
        width: 70,
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    text: {
        fontSize: 15,
        color: 'grey',
        fontWeight: 'bold',
    }
})