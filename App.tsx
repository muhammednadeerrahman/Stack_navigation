import 'react-native-gesture-handler';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './src/components/screens/Home';
import About from './src/components/screens/About';
import Contact from './src/components/screens/Contact';
import Details from './src/components/screens/Details';
import One from './src/components/screens/One';
import Two from './src/components/screens/Two';
import Three from './src/components/screens/Three';
import Four from './src/components/screens/Four';
import Nav from './src/assets/nav.svg';

import Menu from './src/components/screens/Menu';
import Mt1 from './src/components/screens/Mt1';
import Mt2 from './src/components/screens/Mt2';
import Mt3 from './src/components/screens/Mt3';


export default function App() {
  
const Stack = createNativeStackNavigator();
const TabScreen = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();

const TabDisplay = ()=>(
        <TabScreen.Navigator
        screenOptions={({route})=>({
            headerShown:false,
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor :'green',
            // tabBarBadge : '1',
            tabBarIcon: ({focused}) =>focused ? (
                 <Text style={styles.tabTitle}>act</Text>
                
              ):(<Text style={styles.tabTitle}>tab</Text>)
          })}
        >
                <TabScreen.Screen name='One' component={DrawerStack} />
                <TabScreen.Screen name='Two' component={Two} />
                <TabScreen.Screen name='Three' component={Material} />
                <TabScreen.Screen name='Four' component={Four} />
        </TabScreen.Navigator>

    )
    const Material = ()=>(
        <Tab.Navigator
        initialRouteName="Home"
        activeColor="red"
        inactiveColor="lightblue"
        barStyle={{ backgroundColor: '#694fad' }}
        screenOptions={{
            tabBarIcon: ({}) => (
                <Image style={styles.Image} source={require('./src/assets/home.png')} />
              ),
        }}
        >
            <Tab.Screen name="MaterialBottom1" component={Mt1} />
            <Tab.Screen name="MaterialBottom2" component={Mt2} />
            <Tab.Screen name="MaterialBottom3" component={Mt3} />
        </Tab.Navigator>
    )
    const DrawerStack = ()=>(
        <Drawer.Navigator screenOptions={{
            drawerActiveTintColor: 'red',
            drawerInactiveTintColor : 'green'

        }}>
            <Drawer.Screen name='Menu' component={Menu} />
            <Drawer.Screen name='Details' component={Details} />

            
        </Drawer.Navigator> 
    )

  return (

    <NavigationContainer>

         <Stack.Navigator initialRouteName='Home'  screenOptions={{headerShown : false}}>
             <Stack.Screen name="About" component={About} />
             <Stack.Screen name="Contact" component={Contact} />
             <Stack.Screen name="Details" component={Details} />
            <Stack.Screen  
            name="Home" 
            component={TabDisplay}
            options={{
                headerShown :false ,
              }}
            />

        </Stack.Navigator>


    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
    tabTitle :{
        fontWeight :"600",
        color: '#000'
    },
    nav:{
        backgroundColor: '#fff',
        padding: 20

    },
    Image:{
        width:25,
        height:25
    }
})