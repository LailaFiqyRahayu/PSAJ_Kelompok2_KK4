import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./style";
import CardArticle from "../../CardArticle/index";
import assets from "../../../assets/material-symbols_arrow-back-ios.png";
import { Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import reformasi from "../../../data/artikel/reformasi";

const Reformasi = ({ navigation, route }) => {
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 142,
          backgroundColor: "#E42C2D",
          position: "absolute",
          zIndex: 3,
          flex: 1,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.replace("Home");
          }}
          style={{marginTop:45}}
        >
          <Image
            source={require("../../../assets/material-symbols_arrow-back-ios.png")}
            style={{
              width: 30,
              height: 30,
              marginLeft: 14,
              marginTop: 10,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: 170,
            height: 55,
            backgroundColor: "white",
            position: "absolute",
            borderRadius: 20,
            marginTop: 105,
            alignSelf:"center",
            marginHorizontal: 70,
            elevation: 5,
            zIndex: 3,
            marginBottom: 10,
          }}
        >
          <Text style={styles.title}>Reformasi</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{marginTop:45}}>
        <SafeAreaView style={styles.container}>
          <View>
            <View style={styles.heading}></View>

            <FlatList
              style={styles.list}
              data={reformasi}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <CardArticle
                    title={item.name}
                    image={item.image}
                    content={item.title}
                  />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id}
            />
          </View>
        </SafeAreaView>
      </TouchableOpacity>
    </View>
  );
};

export default Reformasi;
