import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TopRouteProps, TopRoutes } from '../routes/top-routes';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator<TopRouteProps>();

export const TopNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
            name={TopRoutes.Home}
            component={() => <View style={{ flex: 1, backgroundColor: 'red' }}/>}/>
            <Tab.Screen 
            name={TopRoutes.Account}
            component={() => <View style={{ flex: 1, backgroundColor: 'pink'}}/>}/>
        </Tab.Navigator>
    )
}