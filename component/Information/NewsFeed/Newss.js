import React, { useEffect, useState } from 'react'
import {
  Text,
  View,
  ActivityIndicator,
  ScrollView,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native'
import Modal from 'react-native-paper'

import { WebView } from 'react-native-webview'
import { Overlay } from 'react-native-elements'
import { Divider } from 'react-native-paper'
import {
  blue,
  DarkAppColor,
  MainAppColor,
  MainFontColor,
} from '../../../assets/Color'

import * as WebBrowser from 'expo-web-browser'
import AutoScroll from './AutoScroll'

import NewsMenu from './NewsMenu'
import NewsInfo from './NewsInfo'

export default function Newss() {
  const [selectedTopic, setselectedTopic] = useState('Latest')
  const [newsData, setnewsData] = useState(undefined)
  const [newsIcon, setnewsIcon] = useState({})

  useEffect(() => {
    fetch(
      'https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NewsData.json',
    )
      .then((response) => response.json())
      .then((json) => setnewsData(json))
      .catch((error) => console.error(error))
  }, [])

  useEffect(() => {
    fetch(
      'https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/NewsIcon.json',
    )
      .then((response) => response.json())
      .then((json) => setnewsIcon(json))
      .catch((error) => console.error(error))
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      {newsIcon == {} ||
        (newsData == undefined && (
          <View
            style={{
              flex: 1,
              backgroundColor: DarkAppColor,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ActivityIndicator size={50} color={blue} />
            <Text style={{ fontSize: 30, color: blue }}>Loading...</Text>
          </View>
        ))}
      {newsIcon != {} && newsData !== undefined && (
        <View>
          <ScrollView>
            <AutoScroll />
            {/* <Divider /> */}
            <NewsMenu
              selectedTopic={selectedTopic}
              setselectedTopic={setselectedTopic}
              newsIcon={newsIcon}
            />
            {/* <Divider /> */}

            {newsData != undefined && (
              <NewsInfo
                data={newsData[selectedTopic]}
                selectedTopic={selectedTopic}
              />
            )}
          </ScrollView>
        </View>
      )}
    </View>
  )
}
