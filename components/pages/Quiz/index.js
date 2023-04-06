import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Text,
  FlatList,
  View,
  RefreshControl,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import Axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { Button } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { RadioButton } from "react-native-paper";
import styles from "./style";
import CardQuiz from "../../CardQuiz/index";

export default function DetailQuiz({ route }) {
  const [isLoading, setLoading] = useState(true);
  const { itemId, answer, currentPage } = route.params;
  const [soal, setSoal] = useState({});
  const [data, setData] = useState([]);
  const [checked, setChecked] = useState("");
  const [dataJumlahSoal, setDataJumlahSoal] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    Axios.get(`http://10.0.2.2:5000/api/quizzes/`)
      .then((response) => {
        const { data } = response.data;
        console.log(data);
        setData(data);
        setSoal(data[currentPage]);
        //console.log(answer);
        // console.log(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    Axios.get(`http://10.0.2.2:5000/api/quizzes/`)
      .then(({ data }) => {
        console.log("defaultApp -> data", data.object);
        setSoal(data);
      })
      .catch((error) => console.error(error))
      .finally(() => setRefreshing(false));
  };

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
           onPress={() => {
             navigation.replace("Home");
           }}
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
             marginTop: 60,
             marginHorizontal: 80,
             elevation: 5,
             zIndex: 3,
             marginBottom: 20,
             marginLeft: 120
           }}
         >
           <Text style={styles.textquiz}>Quiz</Text>
         </TouchableOpacity>
       </View>
       <View style={styles.body}>
         <CardQuiz
            title={soal.quiz}>
         </CardQuiz>
             <View style={{ flexDirection: "row", marginLeft : 20, marginVertical: 5, marginBottom: 30 }}>
               <RadioButton
                 value="a"
                 status={checked === "a" ? "checked" : "unchecked"}
                 onPress={() => setChecked("a")}
               />
               <Text>{soal.a}</Text>
             </View>
             <View style={{ flexDirection: "row", marginLeft : 20, marginVertical: 5, marginBottom: 30}}>
               <RadioButton
                 value="b"
                 status={checked === "b" ? "checked" : "unchecked"}
                 onPress={() => setChecked("b")}
               />
               <Text>{soal.b}</Text>
             </View>
             <View style={{ flexDirection: "row", marginLeft : 20, marginVertical: 5, marginBottom: 30}}>
               <RadioButton
                 value="c"
                 status={checked === "c" ? "checked" : "unchecked"}
                 onPress={() => setChecked("c")}
               />
               <Text>{soal.c}</Text>
             </View>
             <View style={{ flexDirection: "row", marginLeft : 20, marginVertical: 5,marginBottom: 30}}>
               <RadioButton
                 value="d"
                 status={checked === "d" ? "checked" : "unchecked"}
                 onPress={() => setChecked("d")}
                 style={styles.soal}
               />
               <Text>{soal.d}</Text>
             </View>
       </View>
       <View>
         {currentPage == data.length - 1 ? (
           <TouchableOpacity
             style={styles.button}
             onPress={() => {
               answer[soal.id] = checked;
               navigation.replace("Score", {
                 answer: answer,
               });
             }}
           >
             <Text>Finish</Text>
           </TouchableOpacity>
         ) : (
           <TouchableOpacity
             style={styles.button}
             onPress={() => {
               answer[soal.id] = checked;
               navigation.replace("Quiz", {
                 currentPage: currentPage + 1,
                 answer: answer,
               });
             }}
           >
             <Text>NEXT{currentPage}</Text>
           </TouchableOpacity>
         )}
       </View>
     </View>
   );
}