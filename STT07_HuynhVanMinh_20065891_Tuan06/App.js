import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screen2 from "./screens/Screen2";

function Screen1({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Image
        style={{
          width: "301px",
          height: "361px",
          resizeMode: "contain",
          marginTop: "10px",
        }}
        source={route.params?.image ?? require("./assets/vs_blue.png")}
      />
      <Text
        style={{
          right: "26px",
          fontSize: "15px",
          fontWeight: 400,
          marginTop: "10px",
        }}
      >
        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
      </Text>
      {/* ------------------------------------------------ */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <View style={{ flexDirection: "row", right: "25px" }}>
          <Image
            style={{ width: "23px", height: "25px", marginRight: "5px" }}
            source={require("./assets/Star.png")}
          />
          <Image
            style={{ width: "23px", height: "25px", marginRight: "5px" }}
            source={require("./assets/Star.png")}
          />
          <Image
            style={{ width: "23px", height: "25px", marginRight: "5px" }}
            source={require("./assets/Star.png")}
          />
          <Image
            style={{ width: "23px", height: "25px", marginRight: "5px" }}
            source={require("./assets/Star.png")}
          />
          <Image
            style={{ width: "23px", height: "25px" }}
            source={require("./assets/Star.png")}
          />
        </View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: 400,
            marginLeft: "23px",
          }}
        >
          (Xem 828 đánh giá)
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Text
          style={{
            fontSize: "18px",
            fontWeight: 700,
            right: "55px",
          }}
        >
          1.790.000 đ
        </Text>
        <View>
          <Text
            style={{
              color: "rgba(0, 0, 0, 0.58)",
              fontSize: "15px",
              fontWeight: 700,
              textDecorationLine: "line-through",
              marginLeft: "44px",
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          right: "77px",
          marginTop: "10px",
        }}
      >
        <Text style={{ color: "#FA0000", fontSize: "12px", fontWeight: 700 }}>
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <Image
          style={{ width: "20px", height: "20px", marginLeft: "5px" }}
          source={require("./assets/Group 1.png")}
        />
      </View>

      <Pressable
        onPress={() => navigation.navigate("Screen2")}
        style={styles.btnOption}
      >
        <Text
          style={{
            fontSize: "15px",
            fontWeight: 400,
            textAlign: "center",
            marginLeft: "103px",
          }}
        >
          4 MÀU-CHỌN MÀU
        </Text>
        <Image
          style={{ width: "11.5px", height: "14px", marginLeft: "71px" }}
          source={require("./assets/Vector.png")}
        />
      </Pressable>

      <Pressable style={styles.btnBuy}>
        <Text style={{ color: "#F9F2F2", fontSize: "20px", fontWeight: 700 }}>
          CHỌN MUA
        </Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  btnOption: {
    width: "332px",
    height: "34px",
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.46)",
    backgroundColor: "rgba(196, 196, 196, 0.00)",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    flexDirection: "row",
    marginTop: "16px",
  },
  btnBuy: {
    width: "332px",
    height: "44px",
    borderRadius: "10px",
    border: "1px solid #CA1536",
    backgroundColor: "#EE0A0A",
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    alignItems: "center",
    padding: "7px",
    marginTop: "59px",
  },
});
