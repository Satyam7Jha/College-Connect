import React, { useState } from 'react'
import { View, Image, Text } from 'react-native'

// npm i react-native-swiper
import Swiper from 'react-native-swiper'

export default function App() {
  console.log('Header')

  const [userData, setuserData] = useState([
    {
      img:
        'data:image/jpeg;base64,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',
      name: 'satyam',
    },
    {
      img:
        'https://getmyuni.azureedge.net/college-image/big/rns-institute-of-technology-rnsit-bangalore.jpg',
      name: 'Jennie Barnett',
    },

    {
      img: 'https://www.versionx.in/wp-content/uploads/2019/02/GPS.jpg',
      name: 'Christian Wilson',
    },
    {
      img: 'https://wallpapercave.com/dwp1x/wp7939960.jpg',
      name: 'Matthew Wagner',
    },
    {
      img: 'https://wallpapercave.com/wp/wp3537548.png',
      name: 'Sophia Fernandez',
    },
  ])

  const URL =
    'https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/HeaderImage.json'

  React.useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setuserData(json))
      .catch((error) => console.error(error))
  }, [])

  return (
    <View style={{ height: 200, marginTop: 5 }}>
      <Swiper
        loop={true}
        style={{ height: 350 }}
        autoplay={true}
        autoplayTimeout={4}
      >
        {userData.map((user) => (
          <View key={user} style={{ alignItems: 'center' }}>
            <Image
              style={{
                width: '95%',
                height: 200,
                borderRadius: 10,
                marginRight: 5,
                marginLeft: 5,
              }}
              source={{ uri: user.img }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  )
}
