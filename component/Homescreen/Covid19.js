import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    Dimensions

} from "react-native";
import { MainAppColor, MainFontColor } from "../../assets/Color";

export default function Covid19() {
    const [isLoadingBangalore, setLoadingBangalore] = useState(true);
    const [covid, setCovid] = useState([]);

    useEffect(() => {
        fetch(
            "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
        )
            .then((response) => response.json())
            .then((json) => setCovid(json))
            .catch((error) => console.error(error))
            .finally(() => setLoadingBangalore(false));
    }, []);

    if (isLoadingBangalore) {
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

    // console.log(covid);



    return (
        <View style={{ width: Dimensions.get("window").width, marginHorizontal: 10, marginBottom: 20, padding: 5, alignItems: "center", borderColor: MainAppColor, borderBottomWidth: 5 }}>
            <View style={{ alignItems: "center", justifyContent: "center" }}><Text style={{ fontSize: 25, color: "white" }}>COVID-19</Text><Text style={{ color: MainFontColor }}>{covid["lastUpdatedAtApify"].slice(0, 10)}</Text></View>



            <View style={{ flex: 1, width: "100%" }}><Text style={{ fontSize: 25, color: MainFontColor, fontWeight: "bold" }}>{covid["regionData"][15]["region"]}</Text></View>
            <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
                    <Text style={{ color: 'red' }}>TotalCases</Text>
                    <Text style={{ color: 'red' }}>{covid["regionData"][15]["totalInfected"]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'blue' }}>Active</Text>
                    <Text style={{ color: 'blue', fontSize: 11 }}>({covid["regionData"][15]["newInfected"]})</Text>
                    <Text style={{ color: 'blue' }}>{covid["regionData"][15]["activeCases"]}</Text>

                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'green' }}>Recovered</Text>
                    <Text style={{ color: 'green', fontSize: 11 }}>({covid["regionData"][15]["newRecovered"]})</Text>
                    <Text style={{ color: 'green' }}>{covid["regionData"][15]["recovered"]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'grey' }}> Deaths</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>({covid["regionData"][15]["newDeceased"]})</Text>
                    <Text style={{ color: 'grey' }}>{covid["regionData"][15]["deceased"]}</Text>
                </View>
            </View>

            <Text style={{ color: "black" }}>-----------------------------------------------------------------</Text>

            <View style={{ flex: 1, width: "100%" }}><Text style={{ fontSize: 25, color: MainFontColor }}>Across India</Text></View>
            <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'red' }}>TotalCases</Text>
                    <Text style={{ color: 'red' }}>{covid["totalCases"]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'blue' }}>Active</Text>
                    <Text style={{ color: 'blue', fontSize: 11 }}>({covid["activeCasesNew"]})</Text>
                    <Text style={{ color: 'blue' }}>{covid["activeCases"]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'green' }}>Recovered</Text>
                    <Text style={{ color: 'green', fontSize: 11 }}>({covid["recoveredNew"]})</Text>
                    <Text style={{ color: 'green' }}>{covid["recovered"]}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: 'grey' }}> Deaths</Text>
                    <Text style={{ color: 'grey', fontSize: 11 }}>({covid["deathsNew"]})</Text>
                    <Text style={{ color: 'grey' }}>{covid["deaths"]}</Text>
                </View>
            </View>

        </View>
    );
}
