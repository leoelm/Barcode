import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker, StatusBar, TouchableOpacity } from 'react-native';
import { Value } from 'react-native-reanimated';

const win = Dimensions.get("window")

export default class Start extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ''
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
                <View style={styles.container}>
                    <Text style={styles.title}>Hallo!</Text>
                    <Text style={{fontSize: 25}}>Wer bist du?</Text>
                    <Picker selectedValue={this.state.name}
                            style={styles.picker}
                            onValueChange={(value, index) => this.setState({name: value})}>
                                <Picker.Item label="Bitte wählen" value="" />
                                <Picker.Item label="Irene" value="Irene" />
                                <Picker.Item label="Gerald" value="Gerald" />
                                <Picker.Item label="Pia" value="Pia" />
                                <Picker.Item label="Leo" value="Leo" />
                                <Picker.Item label="Lea" value="Lea" />
                                <Picker.Item label="Max" value="Max" />
                            </Picker>
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate("DrawerStack")}><Text>So passt das!</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: win.height/2,
        alignItems: 'center',
        // backgroundColor: 'rgba(130, 203, 232, 0.5)',
        paddingVertical: win.height/25,
        marginHorizontal: win.width/20,
        borderRadius: 15
    },
    title: {
        fontSize: 75,
        marginBottom: win.height/20 
    },
    picker: {
        marginTop: win.height/50,
        width: win.width/3,
        height: win.height/15
    },
    button: {
        backgroundColor: '#e3e3e3',
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        position: 'absolute',
        bottom: 20
    }
})