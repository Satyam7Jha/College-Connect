import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Platform, Text, View, StyleSheet, Image } from 'react-native';
//import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BusesLoc from './BusesLoc';
import { DarkAppColor } from '../../assets/Color';



export default function App() {



  const [region, setRegion] = useState({
    latitude: 12.9037432,
    longitude: 77.5193716,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })
  // -------------------------------------------------------------------------------------------------------------
  const [location, setLocation] = useState({ latitude: 12.9037432, longitude: 77.5193716 });
  const [errorMsg, setErrorMsg] = useState(null);


  // useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }

  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location.coords);
  //   })();
  // });
  // console.log(location)

  // console.log(location);
  // -------------------------------------------------------------------------------------------------------------
  console.log("Map")


  return (

    <View style={styles.container}>

      <Text style={{ color: "white", fontSize: 20 }}>Comming Soon!!</Text>
      {/* <MapView style={styles.map}
        initialRegion={{
          latitude: 12.9037432,
          longitude: 77.5193716,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          
      
        }}>

       

        <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }}
          title="My current location" onPress={() => console.log("marker_curr")}
          description={"1 . This is a marker in React Natve"}
          icon={require('../BusLOcation/boy.png')}
        />


        <Marker
          coordinate={{
            latitude: 12.9016027278,
            longitude: 77.518522625,
          }}
          title="RNSIT"
          description={"college campus "}
          icon={require("../BusLOcation/college.png")}

        />

      </MapView> */}

    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 50,
    backgroundColor: DarkAppColor,
    alignItems: "center",
    justifyContent: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    height: 1
  }

});