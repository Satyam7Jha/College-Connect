import * as React from 'react'
import { Text, View, ScrollView } from 'react-native'
import Header from '../component/Homescreen/Header'
import Weather from '../component/Homescreen/Weather'
import ImaageOfDay from '../component/Homescreen/ImageOfDay'
import Covid19 from '../component/Homescreen/Covid19'
import Medical from '../component/Homescreen/Medical'
import { AntDesign, MaterialIcons } from '@expo/vector-icons'
import { Overlay } from 'react-native-elements'
import NoticeBoard from '../component/Homescreen/NoticeBoard'
import { DarkAppColor, MainAppColor } from '../assets/Color'
import Stat from '../component/Homescreen/Stat'
import TimeTable from '../component/Homescreen/TimeTable'

export default function App() {
  console.log('Home')

  const [showPopover, setShowPopover] = React.useState(false)

  const toggleOverlay = () => {
    setShowPopover(!showPopover)
  }

  return (
    <View style={{ backgroundColor: DarkAppColor, marginBottom: 50 }}>
      <View
        style={{
          height: 50,
          width: '100%',
          alignItems: 'center',
          flexDirection: 'row',
        }}
      >
        <View style={{ marginLeft: '4%' }}>
          <AntDesign
            name="bars"
            size={28}
            color="white"
            onPress={toggleOverlay}
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '4%',
            flexDirection: 'row',
          }}
        >
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 25 }}>
            College Connect
          </Text>
          <View style={{ flexDirection: 'column-reverse' }}>
            <Text style={{ color: 'red', fontSize: 10 }}> Beta</Text>
          </View>
        </View>
      </View>

      <Overlay
        isVisible={showPopover}
        onBackdropPress={toggleOverlay}
        overlayStyle={{ width: '80%', height: '60%' }}
        animationType="fade"
      >
        <Stat />
      </Overlay>

      <ScrollView>
        <Header />
        <Weather />
        <Covid19 />

        {/* <TimeTable /> */}

        <NoticeBoard />
        <Medical />

        {/* <View
          style={{
            width: "100%",
            height: 400,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", fontSize: 60 }}>coming soon..</Text>
        </View> */}

        <ImaageOfDay />
      </ScrollView>
    </View>
  )
}
