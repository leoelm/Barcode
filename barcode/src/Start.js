import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Picker } from 'react-native';
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
                <View style={styles.container}>
                    <Text style={styles.title}>Hallo!</Text>
                    <Text style={{fontSize: 25}}>Wer bist du?</Text>
                    <Picker selectedValue={this.state.name}
                            style={styles.picker}
                            onValueChange={(value, index) => this.setState({name: value})}>
                                <Picker.Item label="Irene" value={1} />
                                <Picker.Item label="Gerald" value={1} />
                                <Picker.Item label="Pia" value={1} />
                                <Picker.Item label="Leo" value={1} />
                                <Picker.Item label="Lea" value={1} />
                                <Picker.Item label="Max" value={1} />
                            </Picker>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: win.height/2,
        alignItems: 'center'
    },
    title: {
        fontSize: 75,
        marginBottom: win.height/20 
    }
})