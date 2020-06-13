import React, { Component } from 'react';
import { View, Dimensions, StatusBar, ScrollView } from 'react-native';
import { Header } from 'react-native-elements'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const win = Dimensions.get("window")

export default class Inventory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stock: []
        }
    }

    render() {
        return (
            <View>
                <Header backgroundColor='white'
                        leftComponent={<FontAwesomeIcon icon={faBars} size={25} style={{marginLeft: win.width/30}} onPress={() => this.props.navigation.toggleDrawer()}></FontAwesomeIcon>}></Header>
                <StatusBar translucent={true} backgroundColor='transparent'></StatusBar>
                <ScrollView style={{flex: 1}}></ScrollView>
            </View>
        )
    }
}