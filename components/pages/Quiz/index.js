import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';

import styles from './style';
import CardQuiz from '../../CardQuiz/index';

const Quiz = ({ navigation, route }) => {
  const { currentPage, answer } = route.params;
  const [checked, setChecked] = useState('');
  const [data, setData] = useState([]);
  const [soal, setSoal] = useState([]);

  useEffect(() => {
    axios
      .get('http://10.0.2.2:5000/api/quizzes')
      .then((response) => {
        const { data } = response.data;
        setData(data);
        setSoal(data[currentPage]);
        //console.log(answer);
        // console.log(data.length);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <View>
      <View
        style={{
          width: '100%',
          height: 97,
          backgroundColor: '#E42C2D',
          position: 'absolute',
          zIndex: 3,
          flex: 1,
          borderBottomLeftRadius: 40,
          borderBottomRightRadius: 40,
        }}>
        <TouchableOpacity
        onPress={() => {
                navigation.replace('Home');
              }}>
        <Image
            source={require('../../../assets/material-symbols_arrow-back-ios.png') } 
            style={{
              width: 30,
              height: 30,
              marginLeft: 14,
              marginTop: 10
            }}
            
          /></TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 170,
            height: 55,
            backgroundColor: 'white',
            position: 'absolute',
            borderRadius: 20,
            marginTop: 60,
            marginHorizontal: 80,
            elevation: 5,
            zIndex: 3,
            marginBottom: 20,
          }}>
          <Text style={styles.textquiz}>Quiz</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
      <CardQuiz
      title={soal.quiz}
      content=<View>
        <View style={{ flexDirection: 'Row' }}>
          <RadioButton
            value="a"
            status={checked === 'a' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('a')}
          />
          <Text>{soal.a}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            value="b"
            status={checked === 'b' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('b')}
          />
          <Text>{soal.b}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            value="c"
            status={checked === 'c' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('c')}
          />
          <Text>{soal.c}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <RadioButton
            value="d"
            status={checked === 'd' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('d')}
            style={styles.soal}
          />
          <Text>{soal.d}</Text>
        </View>
      </View>
    />
      </View>
      <View>
          {currentPage == data.length - 1 ? (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                answer[soal.id] = checked
                navigation.replace('Score', {
                  answer: answer,
                });
              }}>
              <Text>Finish</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                answer[soal.id] = checked
                navigation.replace('Quiz', {
                  currentPage: currentPage + 1,
                  answer: answer,
                });
              }}>
              <Text>NEXT{currentPage}</Text>
            </TouchableOpacity>
          )}
        </View>
    </View>
  );
};
export default Quiz;

