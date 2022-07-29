import React, { useState, useEffect } from 'react'
import { Text, View, Image, StyleSheet, ActivityIndicator } from 'react-native'
import AutoScrolling from 'react-native-auto-scrolling'

import {
  DarkAppColor,
  MainAppColor,
  MainFontColor,
} from '../../../assets/Color'
import { AntDesign } from '@expo/vector-icons'

export default function AutoScroll() {
  const [isLoading, setLoading] = useState(true)
  const [autoScroll, setAutoscroll] = useState([])

  // console.log(autoScroll)

  useEffect(() => {
    fetch(
      'https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/AUTOSCROLL.json',
    )
      .then((response) => response.json())
      .then((json) => setAutoscroll(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false))
  }, [])

  if (isLoading) {
    return (
      <View style={styles.container}>
        <AutoScrolling style={styles.scrolling2} endPadding={50}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.welcome}>
              Loding Loding Loding Loding Loding Loding Loding
            </Text>
          </View>
        </AutoScrolling>
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <AutoScrolling style={styles.scrolling2} endPadding={50}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            {autoScroll.map((item) => (
              <View
                style={{ alignItems: 'center' }}
                key={(
                  Math.floor(Math.random() * 1000000000000000) + 1
                ).toString()}
              >
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginHorizontal: 5,
                  }}
                >
                  <Text
                    style={{
                      color: MainFontColor,
                      fontWeight: 'bold',
                      fontSize: 15,
                    }}
                  >
                    {' '}
                    {item['Symbol']}{' '}
                  </Text>
                  <Text></Text>

                  <Text
                    style={{
                      fontSize: 13,
                      color:
                        (item['Returns'] * 100).toFixed(2) > 0
                          ? 'green'
                          : 'red',
                    }}
                  >
                    ({(item['Returns'] * 100).toFixed(2)}%){' '}
                  </Text>

                  <View style={{ flexDirection: 'row' }}>
                    <AntDesign
                      name={
                        (item['Returns'] * 100).toFixed(2) > 0
                          ? 'caretup'
                          : 'caretdown'
                      }
                      size={20}
                      color={
                        (item['Returns'] * 100).toFixed(2) > 0 ? 'green' : 'red'
                      }
                    />
                    <Text
                      style={{
                        fontSize: 14,
                        color:
                          (item['Returns'] * 100).toFixed(2) > 0
                            ? 'green'
                            : 'red',
                      }}
                    >
                      {item['Close']}{' '}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </AutoScrolling>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {},

  scrolling2: {
    backgroundColor: DarkAppColor,
    width: '110%',
    padding: 5,
  },
  welcome: {
    backgroundColor: DarkAppColor,
    width: '110%',

    color: MainFontColor,
  },
})
