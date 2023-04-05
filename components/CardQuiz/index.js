import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from "./style";

export default function CardQuiz({ title, image, content }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: image }} />
      <Text style={styles.soal}>{title}</Text>
      <Text style={styles.option}>{content}</Text>
    </View>
  );
}
