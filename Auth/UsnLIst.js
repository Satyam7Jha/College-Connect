import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Dimensions,
  FlatList,
  Picker,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ActivityIndicator, Searchbar } from 'react-native-paper'
import Card from '../assets/Card'
import { blue, DarkAppColor } from '../assets/Color'
export default function UsnList(props) {
  const ckeckSlice = (string, subString) => {
    return subString == string.slice(0, subString.length)
  }

  var newdata = []

  const [searchQuery, setSearchQuery] = React.useState('1RN19')
  const [usnlist, setUsnlist] = React.useState({})
  const [search, setSearch] = React.useState('')

  if (usnlist['body'] != undefined) {
    newdata = Object.keys(usnlist['body']).filter((item) =>
      ckeckSlice(item, searchQuery.toUpperCase()),
    )
  }

  newdata.sort()

  React.useEffect(() => {
    fetch('https://qbeos57y7j.execute-api.us-east-1.amazonaws.com/v1/usnlist/')
      .then((response) => response.json())
      .then((json) => setUsnlist(json))
  }, [])

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          props.setUserData({
            ...usnlist['body'][item],
            usn: item,
          }),
            props.setusnModal(false)
          console.log(usnlist['body'][item])
          props.setEmail(usnlist['body'][item]['Email'][0])
        }}
      >
        <View
          style={{
            backgroundColor: DarkAppColor,
            padding: 10,
            marginTop: 5,
            width: 220,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 20,
              textAlign: 'center',
            }}
          >
            {item}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View>
      {usnlist['body'] == undefined && (
        <View>
          <Searchbar
            placeholder="Search USN"
            onChangeText={(query) => setSearchQuery(query)}
            // value={}
          />

          {/* <View
            style={{
              flex: 1,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'green',
            }}
          > */}
          <ActivityIndicator
            size={'large'}
            color={blue}
            style={{ marginTop: 100 }}
          />
          <Text
            style={{ textAlign: 'center', fontSize: 25, fontWeight: '700' }}
          >
            Loading...
          </Text>
          {/* </View> */}
        </View>
      )}

      {usnlist['body'] !== undefined && (
        <View
          style={{
            width: Dimensions.get('window').width - 80,
            height: Dimensions.get('window').height - 310,
            alignItems: 'center',
            justifyContent: 'center',
            maxHeight: 550,
          }}
        >
          <Searchbar
            placeholder="Search USN"
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
          />

          <FlatList
            data={newdata}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
          {/* <ScrollView>
            <View
              style={{
                alignItems: 'center',
              }}
            > */}
          {/* {newdata.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={item}
                    onPress={() => {
                      props.setUserData({
                        ...usnlist['body'][item],
                        usn: item,
                      }),
                        props.setusnModal(false)
                      console.log(usnlist['body'][item])
                      props.setEmail(usnlist['body'][item]['Email'][0])
                    }}
                  >
                    <View
                      key={index}
                      style={{
                        backgroundColor: DarkAppColor,
                        padding: 10,
                        marginTop: 5,
                        width: 220,
                        borderRadius: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: 'white',
                          fontSize: 20,
                          textAlign: 'center',
                        }}
                      >
                        {item}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
          //     })} */}
          {/* //   </View> */}
          {/* // </ScrollView>/ */}
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})
