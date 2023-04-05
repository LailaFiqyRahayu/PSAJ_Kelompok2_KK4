import { StyleSheet } from "react-native";

export default StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 18,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    paddingTop: 10,
  },
  content: {
    fontSize: 16,
    paddingTop: 3,
    marginHorizontal: 20,
    textAlign: "justify",
    marginVertical: 20,
  },
});
