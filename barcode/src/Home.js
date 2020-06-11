import React, { Component } from 'react';
import { View, Text, Alert, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { Header } from 'react-native-elements'

import { RNCamera } from 'react-native-camera';

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ready: true
        }
    }

    takePicture = async () => {
        if (this.cameras) {
            const options = { quality: 0.5, base64: true };
            const data = await this.camera.takePictureAsync(options)
            console.log(data.uri)
        }
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <Header backgroundColor='white'
                        leftComponent={{icon: 'menu', color: '#000'}}></Header>
                <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>

                <RNCamera style={styles.camera}
                            ref={ref => {
                                this.camera = ref
                            }}
                            type={RNCamera.Constants.Type.back}
                            flashMode={RNCamera.Constants.FlashMode.on}
                            androidCameraPermissionOptions={{
                                title: "Permission to use camera",
                                message: "We need your permisson to use your camera",
                                buttonPositive: "Ok",
                                buttonNegative: "Cancel" 
                            }}
                            androidRecordAudioPermissionOptions={{
                                title: 'Permission to use audio recording',
                                message: 'We need your permission to use your audio',
                                buttonPositive: 'Ok',
                                buttonNegative: 'Cancel',
                            }}
                            onGoogleVisionBarcodesDetected={({ barcodes }) => {
                                this.setState({ready: false})
                                console.log(this.state.ready)
                                if(this.state.ready){
                                    let code;
                                    barcodes.forEach(val => {
                                        if(val.data) {
                                            code = val.data
                                        }
                                    })
                                    Alert.alert("Product Found", `The product with ID ${code} has been found.`, [{text: "ADD", onPress: () => {
                                                                                                                                    this.setState({ready: true})
                                                                                                                                    
                                    }}])
                                }                                
                            }}
                    >
                </RNCamera>
                <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()} style={styles.capture}>
                    <Text>Pic</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    camera: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    capture: {
        flex: 0, 
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20
    }
})