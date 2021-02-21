import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Header } from "react-native-elements";

export default class ReadStoryScreen extends React.Component {
  render() {
    return (
      <View>
        <Header
          backgroundColor={"#ff1099"}
          width={1000}
          centerComponent={{
            text: "Read Story",
            style: { color: "#fff", fontSize: 20 },
          }}
          containerStyle={{
            backgroundColor: "#3d6dcc",
            justifyContent: "space-around",
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
