import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from "./style";

export default function CardList({ title, image, content }) {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={{ uri: image }} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}
