import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { RadioButton } from "react-native-paper";
import axios from "axios";

import styles from "./style";
import CardQuiz from "../../CardQuiz/index";

const Score = ({ navigation, route }) => {
  const { answer } = route.params;
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .post("http://10.0.2.2:5000/api/jobsheet/many", {
        quizId: Object.keys(answer),
        answer: Object.values(answer),
      })
      .then((response) => {
        const { message } = response.data;
        setMessage(message);
        // console.log(message)
        // setData(data);
      })
      .catch((error) => {
        console.log(error);
        // console.log(answer)
      });
  });

  return (
    <View>
      <View
        style={{
          width: "100%",
          height: 97,
          backgroundColor: "#E42C2D",
          position: "absolute",
          zIndex: 3,
          flex: 1,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}
      >
        <TouchableOpacity
          style={{
            width: 170,
            height: 55,
            backgroundColor: "white",
            position: "absolute",
            borderRadius: 20,
            marginTop: 60,
            marginHorizontal: 80,
            elevation: 5,
            zIndex: 3,
            marginBottom: 20,
          }}
        >
          <Text style={styles.textquiz}>Quiz</Text>
        </TouchableOpacity>

        <View style={styles.body}>
          <Text style={styles.caption}>TERIMAKASIH</Text>
          <Text style={styles.caption}>QUIZ SELESAI!</Text>
          <Text style={styles.ceksoal}>{message}</Text>

          <View>
            <TouchableOpacity
              style={styles.btnretry}
              onPress={() => {
                navigation.replace("Quiz", { currentPage: 0, answer: {} });
              }}
            >
              <Text>Ulangi</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnfinish}
              onPress={() => {
                navigation.replace("Home");
              }}
            >
              <Text>Selesai</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Score;