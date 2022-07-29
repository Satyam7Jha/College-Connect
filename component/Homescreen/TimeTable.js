import React, { useEffect, useState } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { Overlay } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
export default function TimeTable() {
  const [timeTable, setTimeTable] = React.useState(undefined)
  const [isVisible, setIsVisible] = React.useState(false)

  var currentPeriod = { sub: '', time: '', day: '' }

  useEffect(() => {
    fetch(
      'https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/TimeTable/SIXSEM/IS/C.json',
    )
      .then((response) => response.json())
      .then((json) => setTimeTable(json))
  }, [])

  const dayMap = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday',
  }

  const checkInterval = (start, end, testVal) => {
    if (testVal < 840 || testVal > 1640) return 404

    if (start <= testVal && testVal <= end) {
      return true
    } else {
      return false
    }
  }

  const helper1 = (s) => {
    return parseInt(s.replace(':', ''))
  }

  var dayData = {}

  const time = [
    '8:40-9:40',
    '9:40-10:40',
    '10:40-11:00',
    '11:00-12:00',
    '12:00-13:00',
    '13:00-13:40',
    '13:40-14:40',
    '14:40-15:40',
    '15:40-16:40',
  ]

  console.log(timeTable)

  if (timeTable !== undefined) {
    const d = new Date()
    var day = dayMap[d.getDay()]

    dayData = timeTable[day]
    console.log(Object.keys(dayData).sort())

    for (var a in Object.keys(dayData)) {
      var temp = Object.keys(dayData)[a].split('-')
      var start = helper1(temp[0])
      var end = helper1(temp[1])

      var currTime = `${d.getHours()}:${
        d.getMinutes().toString().length == 1
          ? '0' + d.getMinutes()
          : d.getMinutes()
      }`

      if (checkInterval(start, end, helper1(currTime)) == false) {
        let z = 1
      } else if (checkInterval(start, end, helper1(currTime)) == true) {
        currentPeriod = {
          sub: dayData[Object.keys(dayData)[a]],
          time: Object.keys(dayData)[a],
          day: day,
        }
      } else if (checkInterval(start, end, helper1(currTime)) == 404) {
        currentPeriod = { sub: 'No Class', time: currTime, day: day }
      }
    }
  }

  //   console.log(currentPeriod)
  return (
    <View style={{ height: 190, borderBottomWidth: 1, borderColor: 'grey' }}>
      <Text style={{ color: 'white' }}>Time Table</Text>
      <Text style={{ textAlign: 'center', fontSize: 35, color: 'white' }}>
        {currentPeriod['day']}
      </Text>

      {/* <Text style={{ fontSize: 18, textAlign: 'center', color: 'white' }}>
        {currentPeriod['time']}
      </Text>
      <Text style={{ fontSize: 30, textAlign: 'center', color: 'white' }}>
        {currentPeriod['sub']}
      </Text> */}

      {timeTable !== undefined && (
        <ScrollView horizontal={true}>
          <View
            style={{
              height: 100,
              flexDirection: 'row',
            }}
          >
            {time.map((item, index) => {
              return (
                <View
                  style={{
                    width: 100,
                    margin: 5,
                  }}
                >
                  <Text style={{ textAlign: 'center', color: 'white' }}>
                    {item}
                  </Text>
                  <Text style={{ textAlign: 'center' }}>
                    {timeTable[currentPeriod['day']][item]}
                  </Text>
                </View>
              )
            })}
          </View>
        </ScrollView>
      )}

      <View
        style={{
          marginTop: 20,
          flexDirection: 'row-reverse',
          paddingLeft: 12,
        }}
      >
        <TouchableOpacity onPress={() => setIsVisible(true)}>
          <Image
            style={{
              width: 50,
              height: 50,
            }}
            source={require('../../assets/schedule.png')}
          />
        </TouchableOpacity>
      </View>

      <Overlay
        onRequestClose={() => setIsVisible(false)}
        isVisible={isVisible}
        onBackdropPress={() => setIsVisible(false)}
      >
        <View
          style={{
            height: 250,
            width: 310,
            borderWidth: 2,
            borderRadius: 5,
            backgroundColor: 'white',
            alignItems: 'center',
          }}
        >
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            source={{
              uri:
                'https://firebasestorage.googleapis.com/v0/b/userapp-12ba6.appspot.com/o/Screenshot%20from%202022-04-07%2023-31-43.png?alt=media&token=24642163-3410-49bf-b37a-f2657667dced',
            }}
          />
        </View>
      </Overlay>
    </View>
  )
}
