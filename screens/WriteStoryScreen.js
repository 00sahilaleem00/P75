import React from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
    constructor(){
        super();
        this.state = {
            storyTitle: 'Enter Title Here',
            storyAuthor: 'Enter Author Here',
            story:'Enter Story Here'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Header
                    backgroundColor={'#ff1099'}
                    width={1000}
                    centerComponent={{
                        text: 'Write Story',
                        style: { color: '#fff', fontSize: 20}
                    }}
                />
                <TextInput multiline={true} value={this.state.storyTitle} style={styles.inputBox} onChangeText={(text) => {this.setState({storyTitle: text})}}/>
                <TextInput multiline={true} value={this.state.storyAuthor} style={styles.inputBox} onChangeText={(text) => {this.setState({storyAuthor: text})}}/>
                <TextInput multiline={true} value={this.state.story} style={styles.inputBox} onChangeText={(text) => {this.setState({story: text})}}/>
                <TouchableOpacity style={styles.goButton} onPress={() => {
                    console.log("Title: "+this.state.storyTitle+", Author: "+this.state.storyAuthor+", Story: "+this.state.story);
                }}>SUBMIT</TouchableOpacity>
            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    inputBox: {
        width: 250,
        height: 40,
        borderWidth: 1.5,
        borderRightWidth: 0,
        fontSize: 20,
        margin: 10,
        alignSelf: 'center'
    },
    goButton: {
        height: 50,
        alignSelf: 'center',
        padding: 10,
        margin: 10,
        fontSize: 20,
      },
})