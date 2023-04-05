import React from "react";
import { View, Button, TextInput, Text, ScrollView } from "react-native";

const CustomTextInput = (props) => {
  return (
    <ScrollView>
      <View>
        <Text
          style={{
            textAlign: "left",
            fontSize: 15,
            marginLeft: 10,
          }}
        >
          {props.label}
        </Text>
        <TextInput
          placeholder={props.search}
          style={{
            textAlign: "left",
            fontSize: 14,
            padding: 18,
            borderRadius: 8,
            marginHorizontal: 11,
          }}
        ></TextInput>
      </View>
    </ScrollView>
  );
};

export default CustomTextInput;
