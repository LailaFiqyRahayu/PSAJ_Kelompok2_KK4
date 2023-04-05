import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "column", // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: "space-between",
    paddingTop: 165,
    paddingBottom: 20,
    textAlign: "center",
    backgroundColor: "white",
    zIndex: 1,
    position: "relative",
  },

  heading: {
    fontSize: 32,
    fontWeight: "bold",
    fontFamily: "tw cen mt",
    textAlign: "center",
    color: "white",
    marginTop: 72,
  },

  list: {
    marginTop: 120,
  },
  img: {
    paddingTop: 80,
  },
  button: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "tw cen mt",
    textAlign: "center",
    color: "black",
    justifyContent: "center",
  },
});
