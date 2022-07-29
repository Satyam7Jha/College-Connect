import React, { useEffect, useState, useContext } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { Icon } from 'react-native-elements'
import { DarkAppColor, MainAppColor } from '../assets/Color'
import { AccountContext } from './Accounts'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { GlobalContext } from '../Auth/GlobalContext'

// const storeData = async (value) => {
//   try {
//     await AsyncStorage.setItem('@storage_Key', value)
//   } catch (e) {
//     // saving error
//     console.log('fail to store data :loginpage')
//   }
// }

// const storeData2 = async (value) => {
//   try {
//     await AsyncStorage.setItem('cognito:username', value)
//   } catch (e) {
//     // saving error
//     console.log('fail to store data :loginpage')
//   }
// }
export default function Login(props) {
  const { status, setStatus, ttoken, setttoken } = useContext(GlobalContext)

  const [userId, setuserId] = useState('')
  const [password, setPassword] = useState('')

  const { authenticate, mydata, setMydata } = useContext(AccountContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(userId, password)
    authenticate(userId, password)
      .then((data) => {
        // storeData(data['idToken']['jwtToken'])
        // setMydata(data)
        // setStatus(true)
        // storeData2(data['idToken']['payload']['cognito:username'])
        // setttoken(data['idToken']['jwtToken'])
        console.log(data)

        // localStorage.setItem('myData', data.idToken.jwtToken);
        // localStorage.setItem('name',data.payload.username);
        //   setRedirectLogin(false);
        // history.replace('/nifty_50');
        // setLogged(localStorage.getItem('myData'));
      })
      .catch((err) => {
        console.error('Failed to login!', err)
        alert(err.message)
      })
  }

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true)
  }, [])

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <LinearGradient
        colors={[MainAppColor, MainAppColor, '#111']}
        style={styles.container}
      >
        <Text style={styles.welcomeText}>Welcome Back!</Text>

        <Text style={styles.loginText}>Login</Text>
        <TextInput
          value={userId}
          onChangeText={setuserId}
          placeholder="Enter your: USN"
          placeholderTextColor="#808e9b"
          style={styles.input}
          autoCapitalize="none"
          autoCompleteType="email"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#808e9b"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          textContentType="password"
        />
        <TouchableOpacity onPress={() => props.nav.navigate('Forgotpassword')}>
          <Text style={styles.fpText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.loginWithBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="google" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name="facebook-square"
              type="font-awesome"
              size={30}
              color="#808e9b"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="apple" type="font-awesome" size={30} color="#808e9b" />
          </TouchableOpacity>
        </View>
        <View style={styles.signUpTextView}>
          <Text style={styles.signUpText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => props.nav.navigate('SignUp')}>
            <Text style={[styles.signUpText, { color: 'yellow' }]}>
              {' Sign Up'}
            </Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: '900',
    color: 'yellow',
    alignSelf: 'center',
  },
  loginText: {
    color: 'yellow',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#333',
    borderRadius: 6,
    marginTop: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#808e9b',
  },
  fpText: {
    alignSelf: 'flex-end',
    color: 'yellow',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: DarkAppColor,
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fafafa',
    alignSelf: 'center',
  },
  loginWithBar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  iconButton: {
    backgroundColor: '#333',
    padding: 14,
    marginHorizontal: 10,
    borderRadius: 100,
  },
  signUpTextView: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  signUpText: {
    color: '#808e9b',
    fontSize: 20,
    fontWeight: '500',
  },
})
