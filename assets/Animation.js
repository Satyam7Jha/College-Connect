import React, { useEffect } from 'react'
import {
  Button,
  StyleSheet,
  View,
  Text,
  ViewPropTypes,
  TouchableOpacity,
} from 'react-native'
import LottieView from 'lottie-react-native'

export default function Animation(props) {
  let animation = React.createRef()

  useEffect(() => {
    animation.current.play()
  }, [])

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        // style={styles.lottieStyle}
        source={require('./WelcomIcon.json')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  animationContainer: {
    flex: 1,
    padding: 10,
  },

  lottieStyle: {},
})
