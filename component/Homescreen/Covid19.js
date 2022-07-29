import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Card from "../../assets/Card";
import { MainAppColor, MainFontColor } from "../../assets/Color";
import { WebView } from "react-native-webview";
import { Overlay } from "react-native-elements";
import * as WebBrowser from 'expo-web-browser';


export default function Covid19() {
  // console.log("Covid");
  const [isLoadingBangalore, setLoadingBangalore] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const [covid, setCovid] = useState([]);
  const [covidNews, setCovidNews] = useState([]);
  const [url, seturl] = useState("");
  const [showPopover, setShowPopover] = useState(false);

  const toggleOverlay = () => {
    setShowPopover(!showPopover);
  };

  useEffect(() => {
    fetch(
      "https://api.apify.com/v2/key-value-stores/toDWvRj1JpTXiM8FF/records/LATEST?disableRedirect=true"
    )
      .then((response) => response.json())
      .then((json) => setCovid(json))
      .catch((error) => console.error(error))
      .finally(() => setLoadingBangalore(false));
  }, []);

  useEffect(() => {
    fetch(
      "https://userapp-12ba6-default-rtdb.asia-southeast1.firebasedatabase.app/Covid.json"
    )
      .then((response) => response.json())
      .then((json) => setCovidNews(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);



  const _handlePressButtonAsync = async (linkUrl) => {
    let result = await WebBrowser.openBrowserAsync(linkUrl);
    // setResult(result);
  };

  //   console.log(covidNews);

  if (isLoadingBangalore || isLoading) {
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
  } else {
    return (
      <View
        style={{
          width: Dimensions.get("window").width,
          marginHorizontal: 10,
          marginBottom: 20,
          padding: 5,
          alignItems: "center",
          borderColor: MainAppColor,
          borderBottomWidth: 5,
          
        }}
      >
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 25, color: "white" }}>COVID-19</Text>
          <Text style={{ color: MainFontColor }}>
            {covid["lastUpdatedAtApify"].slice(0, 10)}
          </Text>
        </View>



        <Text style={{ color: "black" }}>--------------------------</Text>

        <View style={{ flex: 1, width: "100%" }}>
          <Text style={{ fontSize: 25, color: MainFontColor }}>
            India
          </Text>
        </View>
        <View style={{ flexDirection: "row", width: "100%", height: 70 }}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "red" }}>TotalCases</Text>
            <Text style={{ color: "red" }}>{covid["totalCases"]}</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "blue" }}>Active</Text>
            <Text style={{ color: "blue", fontSize: 11 }}>
              ({covid["activeCasesNew"]})
            </Text>
            <Text style={{ color: "blue" }}>{covid["activeCases"]}</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "green" }}>Recovered</Text>
            <Text style={{ color: "green", fontSize: 11 }}>
              ({covid["recoveredNew"]})
            </Text>
            <Text style={{ color: "green" }}>{covid["recovered"]}</Text>
          </View>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={{ color: "grey" }}> Deaths</Text>
            <Text style={{ color: "grey", fontSize: 11 }}>
              ({covid["deathsNew"]})
            </Text>
            <Text style={{ color: "grey" }}>{covid["deaths"]}</Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <ScrollView horizontal={true}>
            {covidNews.map((item, index) => {

              return (
                <View key={(index).toString()} style={{ width: Dimensions.get('window').width - 42 }}>
                  <Card style={{ marginLeft: 5, marginRight: 5 }}>
                    <TouchableOpacity
                      onPress={() => {
                        // setShowPopover(true);
                        // seturl(item["link"]);
                        _handlePressButtonAsync(item['link'])
                      }}
                    >
                      <View style={{ width: "100%" }}>
                        <Text style={{ color: "orange" }}>{item["media"]}</Text>
                      </View>
                      <Text style={{ color: "white" }}>
                        {item["title"].length > 70
                          ? item["title"].slice(0, 70) + "..."
                          : item["title"]}
                      </Text>
                      <View style={{ width: "100%" }}>
                        <Text style={{ color: "white" }}>{item["date"]}</Text>
                      </View>
                    </TouchableOpacity>
                  </Card>
                  <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }}><Text style={{ color: "white" }}>{"Scroll ->"}</Text></View>

                </View>

              );
            })}
            <View style={{ width: "100%", alignItems: "center", justifyContent: "center" }}><Text style={{ color: "white" }}>{"Scroll ->"}</Text></View>

          </ScrollView>

        </View>

        <Overlay
          isVisible={showPopover}
          onBackdropPress={toggleOverlay}
          overlayStyle={{ width: "105%", height: "103%" }}
          animationType="fade"
        >
          <WebView source={{ uri: url }} />
        </Overlay>
      </View >
    );
  }
}
