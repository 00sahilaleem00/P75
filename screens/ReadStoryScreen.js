import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  Text,
  ScrollView,
} from "react-native";
import { Header, SearchBar } from "react-native-elements";

import * as firebase from "firebase";
import db from "../config";

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
      dataSource: [],
      search: "",
    };
  }
  componentDidMount = async () => {
    const query = await db.collection("stories").get();
    query.docs.map((doc) => {
      this.setState({
        allStories: [...this.state.allStories, doc.data()],
        dataSource: [...this.state.dataSource, doc.data()],
      });
    });
  };
  updateSearch = (search) => {
    console.log("New Search|||||||||||||||||||");
    this.setState({ search: search });
    var ind = null;
    for (var i in this.state.allStories) {
      if (
        !this.state.allStories[i].author.includes(search) &&
        !this.state.allStories[i].title.includes(search)
      ) {
        for (var j in this.state.dataSource) {
          if (
            this.state.dataSource[j].author ===
              this.state.allStories[i].author ||
            this.state.dataSource[j].title === this.state.allStories[i].title
          ) {
            ind = j;
          }
        }
        if (ind != null) {
          var data = this.state.dataSource;
          data.splice(ind, 1);
          this.setState({
            dataSource: data,
          });
        }
        for (var q in data) {
          console.log(data[q].title + " BY " + data[q].author);
        }
        console.log("YEEYEE------------");
      } else {
        var present = false;
        for (var j in this.state.dataSource) {
          if (
            this.state.dataSource[j].author ===
              this.state.allStories[i].author ||
            this.state.dataSource[j].title === this.state.allStories[i].title
          ) {
            present = true;
          }
        }
        var data = this.state.dataSource;
        if (!present) {
          for (var q in this.state.allStories) {
            console.log(
              this.state.allStories[q].title +
                " BY " +
                this.state.allStories[q].author
            );
          }
          for (var q in data) {
            console.log(data[q].title + " BY " + data[q].author);
          }
          data.push(this.state.allStories[i]);
          for (var q in data) {
            console.log(data[q].title + " BY " + data[q].author);
          }
          this.setState({
            dataSource: data,
          });
          console.log("Presence update done-------------------");
        }
        for (var q in data) {
          console.log(data[q].title + " BY " + data[q].author);
        }
        console.log("Exiting else---------------------");
      }
    }
  };
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
        <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={this.state.search}
        />
        {this.state.dataSource.map((story, index) => {
          return (
            <View key={index} style={{ borderBottomWidth: 2 }}>
              <Text>{"Author: " + story.author}</Text>
              <Text>{"Title: " + story.title}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({});
