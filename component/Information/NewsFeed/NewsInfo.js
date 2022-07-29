import React, { useState } from 'react'

import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
  FlatList,
} from 'react-native'
import {
  MainAppColor,
  MainFontColor,
  DarkAppColor,
  blue,
} from '../../../assets/Color'
import * as WebBrowser from 'expo-web-browser'

export default function NewsInfo({ data, selectedTopic }) {
  const [result, setResult] = useState(null)

  const _handlePressButtonAsync = async (linkUrl) => {
    let result = await WebBrowser.openBrowserAsync(linkUrl)
    setResult(result)
  }

  const renderItem = ({ item }) => {
    return (
      <View
        key={item}
        style={{
          marginTop: 10,
        }}
      >
        <TouchableOpacity
          activeOpacity={0.5}
          key={item['title']}
          onPress={() => {
            _handlePressButtonAsync(item['link'])
          }}
        >
          <Card item={item} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={styles.newsview}>
      <View
        style={{
          backgroundColor: DarkAppColor,
          paddingLeft: 10,
        }}
      >
        <Text
          style={{
            color: 'white',
            fontStyle: 'italic',
            fontWeight: 'bold',
            fontSize: 25,
            textAlign: 'center',
          }}
        >
          {selectedTopic}
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index}
      />
    </View>
  )
}

const Card = ({ item }) => {
  return (
    <View>
      <Text style={styles.newsmedia}>{item['media']}</Text>

      <View style={styles.cardkeandar}>
        <Image
          source={{
            uri: item['img'],
          }}
          style={styles.sideimage}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={styles.newskafont}>{item['title']}</Text>

          <Text style={styles.newsketimekafont}>{item['date']}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  newsview: {
    backgroundColor: DarkAppColor,
    paddingBottom: 100,
  },
  cardkeandar: {
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    backgroundColor: 'rgb(35, 45, 55)',
    borderRadius: Platform.OS === 'ios' ? 16 : 7,
    padding: 14,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    shadowColor: 'black',
    shadowOpacity: { width: 100, height: 100 },
    shadowRadius: 6,
    shadowOpacity: 126,
    elevation: 10,
  },
  sideimage: {
    width: 90,
    height: 80,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
  },
  newskafont: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
  },
  newsketimekafont: {
    marginTop: 3,
    color: MainFontColor,
  },
  newsmedia: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'orange',
    marginLeft: 20,
  },
})
