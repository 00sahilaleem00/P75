import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
  Text,
} from "react-native";
import { Header } from "react-native-elements";

import * as firebase from "firebase";
import db from "../config";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Enter Title Here",
      author: "Enter Author Here",
      story: "Enter Story Here",
    };
  }
  submitStory = async () => {
    db.collection("stories").add({
      author: this.state.author,
      story: this.state.story,
      title: this.state.title,
    });
    var message = "Submitted!";
    ToastAndroid.show(message, ToastAndroid.SHORT);
    this.setState({
      title: "",
      author: "",
      story: "",
    });
  };
  render() {
    return (
      <KeyboardAvoidingView
        styles={styles.container}
        behavior="padding"
        enabled
      >
        <Header
          backgroundColor={"#ff1099"}
          width={1000}
          centerComponent={{
            text: "Write Story",
            style: { color: "#fff", fontSize: 20 },
          }}
        />
        <TextInput
          multiline={true}
          value={this.state.title}
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ title: text });
          }}
        />
        <TextInput
          multiline={true}
          value={this.state.author}
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
        />
        <TextInput
          multiline={true}
          value={this.state.story}
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            this.submitStory();
          }}
        >
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputBox: {
    width: 250,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
    margin: 10,
    alignSelf: "center",
  },
  goButton: {
    height: 50,
    alignSelf: "center",
    padding: 10,
    margin: 10,
    fontSize: 20,
  },
});
