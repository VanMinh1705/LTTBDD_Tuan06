import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

const Screen2 = ({ navigation }) => {
  const [image, setImage] = useState(require("../assets/vs_blue.png"));
  return (
    <View style={styles.container}>
      <View style={{ flex: 2, flexDirection: "row" }}>
        <Image
          style={{ width: "112px", height: "132px", resizeMode: "contain" }}
          source={image}
        />
        <Text
          style={{
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          Điện Thoại Vsmart Joy 3 Hàng chính hãng
        </Text>
      </View>
      <View
        style={{ flex: 7, backgroundColor: "#C4C4C4", alignItems: "center" }}
      >
        <Text style={{ fontSize: "18px", fontWeight: 400, right: "80px" }}>
          Chọn một màu bên dưới:
        </Text>

        <Pressable
          onPress={() => {
            setImage(require("../assets/vs_silver.png"));
          }}
          style={{
            width: "85px",
            height: "80px",
            backgroundColor: "#C5F1FB",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "10px",
          }}
        />

        <Pressable
          onPress={() => {
            setImage(require("../assets/vs_red.png"));
          }}
          style={{
            width: "85px",
            height: "80px",
            backgroundColor: "#F30D0D",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "10px",
          }}
        />
        <Pressable
          onPress={() => {
            setImage(require("../assets/vs_black.png"));
          }}
          style={{
            width: "85px",
            height: "80px",
            backgroundColor: "#000",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "10px",
          }}
        />
        <Pressable
          onPress={() => {
            setImage(require("../assets/vs_blue.png"));
          }}
          style={{
            width: "85px",
            height: "80px",
            backgroundColor: "#234896",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "10px",
          }}
        />

        <Pressable
          onPress={() => {
            navigation.navigate("Home", { image: image });
          }}
          style={{
            width: "326px",
            height: "44px",
            borderRadius: "10px",
            border: "1px solid #CA1536",
            backgroundColor: "rgba(25, 82, 226, 0.58)",
            boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
            marginTop: "34px",
            alignItems: "center",
            padding: "7px",
          }}
        >
          <Text style={{ color: "#F9F2F2", fontSize: "20px", fontWeight: 700 }}>
            XONG
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
