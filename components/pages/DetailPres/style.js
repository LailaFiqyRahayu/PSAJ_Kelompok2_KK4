import { StyleSheet } from "react-native";

export default StyleSheet.create({
  //  body: {
  //     flexDirection: 'column', // inner items will be added vertically
  //     flexGrow: 1, // all the available vertical space will be occupied by it
  //     justifyContent: 'space-between',
  //     padding: 20,
  //     textAlign: 'center',
  //     backgroundColor: 'white',
  //     zIndex: 1,
  //     position: 'relative'
  //   },
  // background: {
  //   fontSize: 32,
  //   fontWeight: 'bold',
  //   fontFamily: 'poppins',
  //   textAlign: 'center',
  //   color: 'white',

  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  //   fontFamily: 'poppins',
  //   color: 'black',
  //   alignItems: 'center',
  //   marginHorizontal: 20,
  //   marginVertical: 14
  // },
  container: {
    backgroundColor: "white",
    borderRadius: 15,
    marginHorizontal: 22,
    flex: 1,
  },
  img: {
    width: 236,
    height: 269,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: "center",
  },

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
    alignSelf: "center",
  },
  content: {
    fontSize: 16,
    paddingTop: 10,
    marginHorizontal: 20,
    marginTop: 10,
    textAlign: "justify",
    lineHeight: 23,
  },
  detailContainer: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginTop: 150,
    backgroundColor: "white",
    marginHorizontal:22,
    borderRadius:15
  },
  // artikel:{
  //   marginHorizontal : 5
  // }
});
