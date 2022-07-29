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
import Card from '../../assets/Card'
import { blue, DarkAppColor } from '../../assets/Color'
export default function SearchStudents(props) {
  const ckeckSlice = (string, string1, subString) => {
    console.log(string, string1, subString, 'string')
    return (
      subString == string.slice(0, subString.length) ||
      subString == string1.slice(0, subString.length)
    )
  }

  var newdata = []

  const [searchQuery, setSearchQuery] = React.useState('')
  const [usnlist, setUsnlist] = React.useState({})
  const [search, setSearch] = React.useState('')

  if (usnlist['body'] != undefined) {
    newdata = Object.keys(usnlist['body']).filter((item) =>
      ckeckSlice(
        item,
        usnlist['body'][item]['Name'].toUpperCase(),
        searchQuery.toUpperCase(),
      ),
    )
    var totalNoStudents = Object.keys(usnlist['body']).length
  }

  newdata.sort()

  React.useEffect(() => {
    fetch('https://qbeos57y7j.execute-api.us-east-1.amazonaws.com/v1/usnlist/')
      .then((response) => response.json())
      .then((json) => setUsnlist(json))
  }, [])

  const renderItem = ({ item }) => {
    return <StudentInfo usn={item} name={usnlist['body'][item]} />
  }

  return (
    <View>
      {usnlist['body'] == undefined && (
        <View style={{ padding: 10 }}>
          <Searchbar
            placeholder="Search USN"
            onChangeText={(query) => setSearchQuery(query)}
          />

          <ActivityIndicator
            size={'large'}
            color={blue}
            style={{ marginTop: 300 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              fontWeight: '700',
              color: blue,
            }}
          >
            Loading...
          </Text>
          {/* </View> */}
        </View>
      )}

      {usnlist['body'] !== undefined && (
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            marginBottom: 50,
          }}
        >
          <Searchbar
            placeholder={`Search USN, ${totalNoStudents} student.`}
            onChangeText={(query) => setSearchQuery(query)}
            value={searchQuery}
          />
          <Text></Text>

          <FlatList
            data={newdata}
            renderItem={renderItem}
            keyExtractor={(item, index) => index}
          />
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

const StudentInfo = (props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
      }}
    >
      <Card
        style={{
          maxWidth: '100%',
          backgroundColor: 'black',
          padding: 20,
          minWidth: '95%',
          flexDirection: 'row',
          height: '100%',
        }}
      >
        <View>
          <View
            style={{
              width: 60,
              height: 60,
              borderRadius: 100,
              backgroundColor: 'grey',
            }}
          ></View>
        </View>

        <View
          style={{
            width: '100%',
            height: '100%',
            marginLeft: 20,
            justifyContent: 'center',
          }}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            {props.usn}
          </Text>

          <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 17 }}>
            {props.name.Name}
          </Text>
        </View>
      </Card>
    </View>
  )
}
