import React, { useState } from 'react'
import { View, Text, ScrollView, Image, Modal } from 'react-native'
import Card from '../assets/Card'
import { DarkAppColor, MainAppColor } from '../assets/Color'
import { List } from 'react-native-paper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SearchStudents from '../component/Profile/SearchStudents'
import SubjectDetails from '../component/Profile/SubjectDetails'
export default function Profile() {
  const [expanded, setExpanded] = React.useState(true)

  const handlePress = () => setExpanded(!expanded)
  const [modalVisible1, setModalVisible1] = useState(false)
  const [modalVisible2, setModalVisible2] = useState(false)
  const [selectedSubject, setSelectSubject] = useState('')

  return (
    <View style={{ flex: 1, backgroundColor: DarkAppColor, padding: 10 }}>
      <ScrollView>
        <StudentInfo />
        <TouchableOpacity onPress={() => setModalVisible1(true)}>
          <View
            style={{
              height: 60,
              width: '100%',
              backgroundColor: MainAppColor,
              borderRadius: 5,
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
            }}
          >
            <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}>
              Search friends
            </Text>
            <Image
              style={{ height: 45, width: 45 }}
              source={require('../assets/search.png')}
            />
          </View>
        </TouchableOpacity>

        <List.Section>
          <List.Accordion
            title="Subjects"
            left={(props) => <List.Icon {...props} icon="book" />}
            style={{ backgroundColor: MainAppColor }}
            titleStyle={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}
          >
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setModalVisible2(true), setSelectSubject('Software Engineering')
              }}
            >
              <List.Item
                title="Software Engineering"
                titleStyle={{ color: 'white' }}
                left={(props) => <List.Icon {...props} icon="book" />}
                style={{
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: MainAppColor,
                  minWidth: '120%',
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setModalVisible2(true)
                setSelectSubject('Computer Science')
              }}
            >
              <List.Item
                title="Computer Science"
                titleStyle={{ color: 'white' }}
                left={(props) => <List.Icon {...props} icon="book" />}
                style={{
                  marginTop: 5,
                  borderRadius: 10,
                  backgroundColor: MainAppColor,
                  minWidth: '120%',
                }}
              />
            </TouchableOpacity>
          </List.Accordion>
        </List.Section>

        <Notification />
      </ScrollView>

      <Modal
        visible={modalVisible1}
        onRequestClose={() => setModalVisible1(false)}
      >
        <View style={{ flex: 1, backgroundColor: DarkAppColor }}>
          <SearchStudents />
        </View>
      </Modal>

      <Modal
        visible={modalVisible2}
        onRequestClose={() => setModalVisible2(false)}
      >
        <View style={{ flex: 1, backgroundColor: DarkAppColor }}>
          <SubjectDetails selectedSubject={selectedSubject} />
        </View>
      </Modal>
    </View>
  )
}

const StudentInfo = () => {
  return (
    <View
      style={{
        width: '100%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 30,
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
          <Text style={{ fontWeight: 'bold', color: 'white' }}>1RN19IS136</Text>

          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            Satyam Kumar Jha
          </Text>
        </View>
      </Card>
    </View>
  )
}

const Notification = () => {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
          fontSize: 30,
          minHight: 200,
          height: 600,
        }}
      >
        Notifications
      </Text>
    </View>
  )
}
