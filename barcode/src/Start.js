import React, { Component, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Animated, Image } from 'react-native';
import {Picker} from '@react-native-community/picker';

const win = Dimensions.get("window")

const FadeIn = (props) => {
    const fade = new Animated.Value(0)

    React.useEffect(() => {
        Animated.timing(
            fade,
            {
                toValue: 1,
                duration: 3000,
                useNativeDriver: true
            }
        ).start();
    }, [])

    return (
        <Animated.View
            style={{
                ...props.style,
                opacity: fade
            }}>
                {props.children}
            </Animated.View>
    );
}

export default class Start extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
        }
    }

    renderPicture = () => {
        if(this.state.name === '') {
            return (
                <FadeIn>
                    <Text style={styles.title}>Hallo!</Text>
                </FadeIn>
            )
        } else {
            return (
                <FadeIn>
                    <Image source={require('../Leo.png')} style={styles.image}></Image>
                </FadeIn>
            )
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
                <View style={styles.container}>
                    {/* <FadeIn> */}
                        {this.renderPicture()}
                    {/* </FadeIn> */}
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
    },
    image: {
        height: win.height/4,
        resizeMode: 'contain'
    }
})