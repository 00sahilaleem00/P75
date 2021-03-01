import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  ToastAndroid,
  Alert,
} from "react-native";
import * as firebase from "firebase";
import db from "../config.js";

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      emailId: "",
      password: "",
    };
  }
  login = async (email, password) => {
    if (email && password) {
      try {
        const response = await firebase
          .auth()
          .signInWithEmailAndPassword(email, password);
        if (response) {
          this.props.navigation.navigate("Read");
        }
      } catch (error) {
        var message = error.message;
        Alert.alert(message);
      }
    } else {
      Alert.alert("Enter a VALID Email ID and Password");
    }
  };
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <View style={({ marginTop: 50 }, styles.container)}>
          <View>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your email ID"
              onChangeText={(text) => {
                this.setState({
                  emailId: text,
                });
              }}
              keyboardType="email-address"
            ></TextInput>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your password"
              onChangeText={(text) => {
                this.setState({
                  password: text,
                });
              }}
              secureTextEntry={true}
            ></TextInput>
            <TouchableOpacity
              onPress={() => {
                this.login(this.state.emailId, this.state.password);
              }}
              style={styles.submitButton}
            >
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  scanButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
  },
  inputView: {
    flexDirection: "row",
    margin: 20,
  },
  inputBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    borderRightWidth: 0,
    fontSize: 20,
  },
  scanButton: {
    backgroundColor: "#66BB6A",
    width: 50,
    borderWidth: 1.5,
    borderLeftWidth: 0,
  },
  submitButton: {
    backgroundColor: "#FBC02D",
    width: 100,
    height: 50,
  },
  submitButtonText: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
