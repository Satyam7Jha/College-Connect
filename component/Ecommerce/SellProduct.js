import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    Dimensions,
    Image,
    Button,
    Linking,
    StyleSheet,
  } from "react-native";

import { WebView } from "react-native-webview";

export default function SellProduct() {
  


    return (
        <WebView
            source={{ uri: "https://docs.google.com/forms/d/e/1FAIpQLSe0t2Ph_h74AFCZ_zYx1LPCLCR2aafVtC3De05skbjqd3c7QA/viewform" }}

        />
        
    );
}

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor : "#fff",
//       alignItems : "center",
//       justifyContent : "center",
//     },
//     imageka:{
//         width:300,
//         height : 300,
//     }
//   });
