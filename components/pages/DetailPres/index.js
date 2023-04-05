import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  ActivityIndicator,
  Image,
  ScrollView
} from "react-native";
import Axios from "axios";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";
import { Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";
import { SearchBar } from "react-native-elements";
import CustomTextInput from "./CustomTextInput";

export default function Home({ navigation, route }) {
  const [Visible, setVisible] = useState(false);

  const toggleDialog = ({ navigation }) => {
    setVisible(!Visible);
  };
  const quiz = ({ navigation }) => {
    setVisible(!Visible);
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const { itemId } = route.params;

  useEffect(() => {
    Axios.get(`http://10.0.2.2:5000/api/sejarahs/${itemId}`)
      .then(({ data }) => {
        console.log("DetailPres -> data", data);
        setData(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  if (isLoading || !data) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View>
      <SafeAreaView
        style={{
          width: "100%",
          height: 117,
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
            navigation.navigate("Home");
          }}
          style={{ width: 24, height: 24 }}
        >
          <Image
            source={require("../../../assets/material-symbols_arrow-back-ios.png")}
            style={{
              width: 24,
              height: 24,
              marginLeft: 24,
              marginTop: 5,
            }}
          />
        </TouchableOpacity>
      </SafeAreaView>
      <ScrollView style={styles.detailContainer}>
        <Image style={styles.img} source={{ uri: data.image }} />
        <Text style={styles.title}>{data.nama_thn}</Text>
        <Text style={styles.content}>{data.deskripsi}</Text>
      </ScrollView>

      <Dialog
        isVisible={Visible}
        onBackdropPress={toggleDialog}
        style={{ height: 10 }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
            height: "30",
          }}
        >
          <Dialog.Title
            title="Konflik Lainnya"
            style={{
              flex: "0.9",
              paddingTop: "20",
            }}
          />

          <Dialog.Actions>
            <Dialog.Button
              title="X"
              onPress={toggleDialog}
              titleStyle={{ color: "#000000" }}
              style={{
                flex: "0.2",
              }}
            />
          </Dialog.Actions>
        </View>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 1, height: 2, backgroundColor: "#E8E2E2" }} />
        </View>

        <TouchableOpacity>
          <Text
            style={{ marginBottom: 21, marginTop: 24 }}
            onPress={() => {
              navigation.replace("PerPolitik");
              setVisible(false);
            }}
          >
            Perkembangan Politik
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ marginBottom: 21 }}
            onPress={() => {
              navigation.replace("KebPolitik");
              setVisible(false);
            }}
          >
            Kebijakan Politik
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ marginBottom: 21 }}
            onPress={() => {
              navigation.replace("Pemilu");
              setVisible(false);
            }}
          >
            Pemilu 2014
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ marginBottom: 21 }}
            onPress={() => {
              navigation.replace("PerEkonomi");
              setVisible(false);
            }}
          >
            Perkembangan Ekonomi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ marginBottom: 21 }}
            onPress={() => {
              navigation.replace("Masyarakat");
              setVisible(false);
            }}
          >
            Kehidupan Masyarakat
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text
            style={{ marginBottom: 21 }}
            onPress={() => {
              navigation.replace("SosialEkonomi");
              setVisible(false);
            }}
          >
            Kondisi Sosial & Ekonomi
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleDialog}>
          <Text
            style={{ marginBottom: 21 }}
            onPress={() => {
              navigation.replace("Quiz", { currentPage: 0, answer: {} });
              setVisible(false);
            }}
          >
            Quiz!
          </Text>
        </TouchableOpacity>
      </Dialog>
    </View>
  );
}
