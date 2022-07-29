import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import { Platform, Text, View, StyleSheet, Image } from 'react-native';
//import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';



export default function BusesLoc() {

    // -------------------------------------------------------------------------------------------------------------
    const [Buslocation, setBuslocation] = useState({ latitude: 12.9037432, longitude: 77.5193716 });
    const [isLoding, setIsloding] = useState(null);
    // const API = "https://bustrack-27015-default-rtdb.asia-southeast1.firebasedatabase.app/BusLocation.json";


    // useEffect(() => {
    //     fetch(
    //         API
    //     )
    //         .then((response) => response.json())
    //         .then((json) => setBuslocation(json))
    //         .catch((error) => console.error(error))
    //         .finally(() => setIsloding(false));
    // }, []);

    if (false) {
        return (<View></View>);
    }

    else {

        const BusList = Object.keys(Buslocation);
        return (

            <View >



                {
                    BusList.map((item) => {

                        if (false) {
                            return (<View key={item} ></View>);
                        }

                        else {
                            return (
                                // <View>{console.log(item)}</View>
                                <Marker key={item} coordinate={{ latitude: Buslocation['latitude'], longitude: Buslocation['longitude'] }}
                                    title={item} onPress={() => console.log("marker_curr")}
                                    icon={require('../BusLOcation/Bus.png')}


                                />

                            );
                        }
                    })

                }



            </View>
        );

    }
}

