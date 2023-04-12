import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Pressable, Text, View } from "react-native/";
import { Home } from "../../screens/home";
import { Login } from "../../screens/login";
import { AppRouteProps, AppRoutes } from "../routes/app-routes";
import { BottomTabs } from "./tab-navigator";

const Stack = createStackNavigator<AppRouteProps>()

export const AppNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: 'pink'}}}>
            <Stack.Screen
                name={AppRoutes.Login}
                component={BottomTabs}
                options={
                    ({ navigation, route }) => ({
                        headerShown: false,
                        headerTransparent: true,
                        headerTitle: () => null,
                        headerRight: () => (
                            <Pressable style={{ height: 30, width: 30, backgroundColor: 'black', marginRight: 10 }}
                                onPress={() => navigation.navigate('Home', {title:'test'})}>
                            </Pressable>
                        )
                    })
                }
            />
            <Stack.Screen
                name={AppRoutes.Home}
                component={Home}
                options={
                    ({ navigation, route }) => ({
                        //title: route.params?.title,
                        headerShown: false,
                        headerTransparent: true,
                        headerTitle: () => null,
                        headerLeft: () => (
                            <Pressable style={{ height: 30, width: 30, backgroundColor: 'black', marginLeft: 10 }}
                                onPress={() => navigation.goBack()}>
                            </Pressable>
                        )
                    })
                } />
                
        </Stack.Navigator>
    )
}

                    // title: 'Proffile',
                    // headerTitle: () => <Text>Instagram</Text>,
                    // headerLeft: () => <Text>Twitter</Text>,
                    // headerRight: () => <View style={{ height: 24, width: 24, backgroundColor: 'red'}}></View>,
                    // headerTransparent: false,
                    // header: () => <View></View>,