import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import react from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './Screens/HomeScreen';
import SettingsScreen from './Screens/SettingsScreen'
import OsosPolares from './Screens/StackScreen'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeStackNavigator =  createNativeStackNavigator();

function MyStack(){
    return (
        <HomeStackNavigator.Navigator
        initialRouteName='HomeScreen'
        >
            <HomeStackNavigator.Screen 
                name='HomeScreen'
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name='Osos'
                component={OsosPolares}
            />
        </HomeStackNavigator.Navigator>
    )
}
const Tab = createBottomTabNavigator();
function MyTabs(){
    return (
        <Tab.Navigator 
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor:'#6CA6CD'
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel:'Inicio',
                    tabBarIcon:({ color, size}) =>(
                        <MaterialCommunityIcons name='teddy-bear' color={color} size={size}/>
                    ),
                    tabBarBadge: 3,
                    headerShown:false
                }} />
            <Tab.Screen 
                name="Favoritos" 
                component={SettingsScreen}
                options={{
                    tabBarLabel:'Favoritos',
                    tabBarIcon:({ color, size})=> (
                        <MaterialCommunityIcons name="heart" color={color} size={size}/>
                    ),
                }}/>
        </Tab.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
 
