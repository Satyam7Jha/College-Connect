import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
  Dimensions,
  ToastAndroid,
  Picker,
} from 'react-native'
import { Overlay } from 'react-native-elements'
import Animation from '../assets/Animation'
import { blue, DarkAppColor } from '../assets/Color'
import EmailVarification from './EmailVarification'
import UsnList from './UsnLIst'
// import { Picker } from '@react-native-picker/picker'

export default function LoginSignup(props) {
  const [usnModal, setusnModal] = useState(false)
  const [userData, setUserData] = useState(undefined)
  const [email, setEmail] = useState('')
  const [sem, setSem] = useState('1')
  const [sec, setSec] = useState('A')
  const [emailModal, setEmailModal] = useState(false)
  var otp = ''

  if (userData != undefined) {
    otp = userData['otp']
  }

  const varifyEmail = async () => {
    fetch(
      `https://qbeos57y7j.execute-api.us-east-1.amazonaws.com/v1/emailvarification?email=${email}&otp=${otp}`,
    )
      .then((response) => response.json())
      .then((json) => console.log(json))
  }

  console.log(email, otp, sem, sec)

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: DarkAppColor,

        paddingTop: 20,
      }}
    >
      <Text
        style={{
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: 30,
          color: blue,
        }}
      >
        College Connect
      </Text>

      {userData === undefined && <Animation />}

      <USNSelector setusnModal={setusnModal} userData={userData} />

      {userData !== undefined && (
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            marginTop: 15,
          }}
        >
          <View>
            <View style={{ marginTop: 10 }}>
              <Text
                style={{
                  fontSize: 30,
                  color: 'white',
                  fontWeight: '800',
                  textAlign: 'center',
                }}
              >
                {userData['Name']}
              </Text>
            </View>

            <View
              style={{
                width: Dimensions.get('window').width,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  justifyContent: 'center',
                  marginTop: 20,
                  borderRadius: 5,
                  width: Dimensions.get('window').width - 50,
                  marginBottom: 10,
                }}
              >
                <Picker
                  selectedValue={''}
                  style={{
                    height: 50,
                    width: Dimensions.get('window').width - 50,
                    color: 'white',
                  }}
                  dropdownIconColor={'white'}
                  onValueChange={(itemValue, itemIndex) => setEmail(itemValue)}
                >
                  {userData['Email'].map((item, index) => (
                    <Picker.Item label={item} value={item} key={index} />
                  ))}
                </Picker>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
                marginTop: 15,
              }}
            >
              <View
                style={{
                  flex: 1,

                  justifyContent: 'center',
                  paddingHorizontal: 10,
                }}
              >
                <Text
                  style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
                >
                  SEM : 6
                </Text>
              </View>

              <View
                style={{
                  borderWidth: 2,
                  borderColor: 'white',
                  borderRadius: 5,
                }}
              >
                <Picker
                  selectedValue={sec}
                  style={{
                    height: 50,
                    width: 130,
                    color: 'white',
                  }}
                  dropdownIconColor={'white'}
                  onValueChange={(itemValue, itemIndex) => setSec(itemValue)}
                >
                  {['A', 'B', 'C'].map((item, index) => (
                    <Picker.Item label={item} value={item} key={index} />
                  ))}
                </Picker>
              </View>
            </View>
          </View>

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setEmailModal(true)
                varifyEmail()
                ToastAndroid.show('OTP sent successfully!', ToastAndroid.SHORT)
              }}
            >
              <View
                style={{
                  backgroundColor: blue,
                  width: 300,
                  height: 50,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text
                  style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}
                >
                  Verify email
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      )}

      <Overlay isVisible={usnModal} onBackdropPress={() => setusnModal(false)}>
        <View
          style={{
            width: Dimensions.get('window').width - 80,
            height: Dimensions.get('window').height - 310,
            maxHeight: 550,
          }}
        >
          <UsnList
            setUserData={setUserData}
            setusnModal={setusnModal}
            setEmail={setEmail}
          />
        </View>
      </Overlay>

      <Overlay
        isVisible={emailModal}
        onBackdropPress={() => {
          setEmailModal(false), varifyEmail()
        }}
      >
        <View
          style={{
            width: Dimensions.get('window').width - 80,
            height: Dimensions.get('window').height - 340,
            maxHeight: 550,
          }}
        >
          <EmailVarification userData={userData} varifyEmail={varifyEmail} />
        </View>
      </Overlay>
    </View>
  )
}

const USNSelector = (props) => {
  return (
    <View
      style={{
        width: '100%',
        height: 80,
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 20,

        // paddingTop: 20,
      }}
    >
      <Text
        style={{
          textAlignVertical: 'center',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 20,
        }}
      >
        USN:
      </Text>

      <View style={{ justifyContent: 'center' }}>
        <TouchableOpacity onPress={() => props.setusnModal(true)}>
          <View
            style={{
              backgroundColor: blue,
              width: 150,
              height: 50,
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
              {props.userData == undefined ? 'Select USN' : props.userData.usn}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
