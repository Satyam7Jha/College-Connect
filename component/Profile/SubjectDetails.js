import React from 'react'
import { View, Text } from 'react-native'
import { MainFontColor } from '../../assets/Color'
export default function SubjectDetails(props) {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 30, color: 'white', textAlign: 'center' }}>
        {props.selectedSubject}
      </Text>

      <Text style={{ color: MainFontColor, marginTop: 10 }}>
        Attendance - 12/15
      </Text>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}
        >
          Marks
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 15 }}>First</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>Second</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>Third</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 5,
          }}
        >
          <Text style={{ color: 'white', fontSize: 15 }}>.</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>.</Text>
          <Text style={{ color: 'white', fontSize: 15 }}>-</Text>
        </View>

        <Text style={{ color: 'white', marginTop: 20, fontSize: 20 }}>
          Notes
        </Text>
      </View>
    </View>
  )
}
