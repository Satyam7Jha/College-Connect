import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native'
import { DarkAppColor, blue } from '../assets/Color'
import { GlobalContext } from './GlobalContext'

export default function EmailVarification(props) {
  console.log(props.userData)

  const { status, setStatus } = useContext(GlobalContext)
  const [inputOtp, setInputOtp] = useState('')

  const varifyOtp = () => {
    setStatus(true)
    ToastAndroid.show('Email Varified', ToastAndroid.SHORT)
  }
  return (
    <View
      style={{ flex: 1, backgroundColor: DarkAppColor, alignItems: 'center' }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 15,
        }}
      >
        Verify OTP
      </Text>

      <View
        style={{
          width: '100%',
          alignItems: 'center',
          marginTop: 20,
          justifyContent: 'space-between',

          flex: 1,
        }}
      >
        <View>
          <View>
            <TextInput
              style={{
                borderWidth: 2,
                width: 200,
                borderColor: 'white',
                borderRadius: 5,
                padding: 5,
                color: 'white',
              }}
              keyboardType="number-pad"
              placeholderTextColor="grey"
              placeholder="Enter 4 digit OTP"
              maxLength={4}
              fontSize={15}
              onChangeText={(EnteredValue) => setInputOtp(EnteredValue)}
              textAlign={'center'}
            />
            <TouchableOpacity
              onPress={() => {
                props.varifyEmail()
                ToastAndroid.show(
                  'Request sent successfully!',
                  ToastAndroid.SHORT,
                )
              }}
            >
              <Text
                style={{
                  textAlign: 'right',
                  color: blue,
                  marginTop: 2,
                  fontSize: 16,
                }}
              >
                resend OTP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <View>
            <Text
              style={{
                textAlign: 'center',
                color: 'red',
                marginTop: 20,
                marginBottom: 10,
              }}
            >
              Check your spam folder if you don't recieve the OTP !!
            </Text>
          </View>
          <TouchableOpacity onPress={() => varifyOtp()}>
            <View
              style={{
                backgroundColor: blue,
                width: 220,
                height: 50,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 40,
              }}
            >
              <Text
                style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}
              >
                Click To Verify
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
