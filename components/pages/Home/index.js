import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
  RefreshControl,
  TouchableHighlight,
} from "react-native";
import Axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./style";

import CardList from "../../CardList";
import { Dialog, CheckBox, ListItem, Avatar } from "@rneui/themed";

export default function Home({navigation}) {
  const [Visible, setVisible] = useState(false);
  const toggleDialog = ({ navigation }) => {
    setVisible(!Visible);
  };
  const quiz = ({ navigation }) => {
    setVisible(!Visible);
  };

  const onPress = (id) => {
    navigation.navigate("DetailPres", { itemId: id });
  };

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    Axios.get(`http://10.0.2.2:5000/api/sejarahs/`)
      .then(({ data }) => {
        console.log("Home -> data", data);
        setData(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    Axios.get("http://10.0.2.2:5000/api/sejarahs/")
      .then(({ data }) => {
        console.log("Home -> data", data.data);
        setData(data.data);
      })
      .catch((error) => console.error(error))
      .finally(() => setRefreshing(false));
  };

  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 180,
          backgroundColor: "#E42C2D",
          position: "absolute",
          zIndex: 3,
          flex: 1,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
      >
        <Text style={styles.heading}>Era Reformasi</Text>

        <TouchableOpacity
          onPress={() => {
            navigation.replace("Reformasi", { currentPage: 0, answer: {} });
            setVisible(false);
          }}
          style={{
            flex: 1,
            backgroundColor: "#ffffff",
            width: 212,
            height: 55,
            position: "absolute",
            borderRadius: 10,
            marginTop: 155,
            marginHorizontal: 25,
            justifyContent: "center",
            elevation: 5,
            zIndex: 3,
            shadowColor: "black",
            shadowOpacity: 10,
            borderColor: "black",
            borderWidth: 2,
          }}
        >
          <Text style={styles.button}>Apa itu Era Reformasi?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "#FFFFFF",
            width: 48,
            height: 50,
            padding: 10,
            borderRadius: 12,
            alignItems: "center",
            marginTop: 45,
            marginLeft: 250,
            shadowRadius: 3,
            shadowColor: "black",

            // alignContent:'Right'
          }}
          onPress={toggleDialog}
        >
          <Image
            source={require("../../../assets/bx_menu-alt-left.png")}
            style={{
              width: 30,
              height: 30,
            }}
          />
        </TouchableOpacity>
      </View>

      <SafeAreaView style={styles.container}>
        <View>
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => onPress(item.id)}>
                <CardList
                  title={item.nama}
                  image={item.image}
                  content={item.gelar}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </SafeAreaView>
      <Dialog
        isVisible={Visible}
        onBackdropPress={toggleDialog}
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
