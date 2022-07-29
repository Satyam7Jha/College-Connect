import React from 'react'
import { View, StatusBar, Platform, SafeAreaView } from 'react-native'
import { GlobalData } from './Auth/GlobalContext'
import Navigation from './Navigation'

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <GlobalData>
        <Navigation />
      </GlobalData>
    </SafeAreaView>
  )
}
