import {StyleSheet} from "react-native";

export default StyleSheet.create({
   container: {
    flexDirection: 'column', // inner items will be added vertically
    flexGrow: 1, // all the available vertical space will be occupied by it
    justifyContent: 'space-between',
    padding: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    zIndex: 1,
    position: 'relative'
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    fontFamily: 'poppins',
    textAlign: 'center',
    color: 'white',
    marginTop: 72,
  },
  textquiz: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
    marginHorizontal: 60,
    marginVertical: 14,
  },
  body: {
    backgroundColor: 'white',
        width: 365,
        height: 500,
        borderRadius: 15,
        marginHorizontal: 22,
        marginTop: 132,
        justifyContent: 'center'
  },
  soal: {
    fontSize: 18,
    fontWeight: 'bold',
    alignItems: 'center'
  },
  option: {
    alignItems: "flex-start",
    flex: 1
  },
  button: {
    backgroundColor : 'red',
    fontSize: 20,
    fontWeight: 'bold',
    padding :5,
    marginHorizontal: 150,
    marginVertical: 2,
    borderRadius: 5,
    width : 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  }
})