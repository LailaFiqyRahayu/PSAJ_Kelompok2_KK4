import * as React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import styles from "./style";

export default function CardArticle({ title, content }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
}
