import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    TouchableOpacity,
    Linking,
} from "react-native";

export default function App() {

    const [isLoading, setLoading] = useState(true);
    const [Notify, setNotify] = useState([]);





    useEffect(() => {
        fetch(
            "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/VTU.json"
        )
            .then((response) => response.json())
            .then((json) => setNotify(json))
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }, []);









    if (isLoading) {
        return (
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1,
                }}
            >

                <Text style={{ color: "blue", fontSize: 25, padding: 15 }}>
                    Loading...
                </Text>
                <ActivityIndicator size="large" color="blue" />
            </View>
        );
    }



    return (
        <View style={{ flex: 1, width: "100%" }}>
            <ScrollView>
                <Image
                    style={{ width: "100%", height: 200, borderRadius: 10, }}
                    source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5N-EHmOBRD6CwFzBIODkyllMqehNCF-hJYw&usqp=CAU" }}
                />
                <View style={{ flex: 1, width: "90%", marginHorizontal: 20, height: 400, borderWidth: 3, marginTop: 100, borderRadius: 10 }}>
                    <View style={{ height: 100, alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 30 }}>CIRCULARS & NOTIFICATIONS</Text></View>
                    <ScrollView nestedScrollEnabled={true}>

                        <View>
                            {
                                Notify.map((item) => {
                                    return (
                                        <View key={item['title']} style={{ flex: 1, flexDirection: "row", borderRadius: 5, borderWidth: 1, marginBottom: 5, width: "95%", marginHorizontal: 10 }}>
                                            <TouchableOpacity
                                                style={{ flex: 1, flexDirection: "row" }}

                                                onPress={() => Linking.openURL(item["file_url"])}
                                            >
                                                <View style={{ flex: 1 / 2, alignItems: "center", justifyContent: "center", backgroundColor: "orange" }}>
                                                    <Text style={{ fontSize: 20 }}>{item['day']}</Text>
                                                    <Text style={{ fontSize: 21 }}>{item['month']}</Text>

                                                </View>

                                                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 3 }}>
                                                    <Text style={{ fontSize: 12 }}>{item["title"]}</Text>
                                                </View>
                                            </TouchableOpacity>

                                        </View>
                                    );
                                })

                            }
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}