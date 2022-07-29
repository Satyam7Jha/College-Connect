import * as React from 'react'
import { Text, View, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Newss from '../component/Information/NewsFeed/Newss'
import VTU from '../component/Information/VTU'
import { blue, DarkAppColor, MainAppColor } from '../assets/Color'
import Gellery from '../component/Information/Gallery'

function News() {
  return <Newss />
}

function VTU_info() {
  return <VTU />
}

function Test() {
  return <Gellery />
}

const Tab = createMaterialTopTabNavigator()

export default function App() {
  console.log('informatin')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator
          screenOptions={{
            swipeEnabled: false,

            tabBarActiveTintColor: blue,
            tabBarInactiveTintColor: 'white',
            tabBarLabelStyle: { fontSize: 15, fontWeight: 'bold' },
            tabBarStyle: { backgroundColor: DarkAppColor },
            tabBarIndicatorStyle: { backgroundColor: blue, height: 5 },
          }}
        >
          <Tab.Screen name="News" component={News} />
          <Tab.Screen name="Gallery" component={Test} />
          <Tab.Screen name="VTU" component={VTU_info} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
