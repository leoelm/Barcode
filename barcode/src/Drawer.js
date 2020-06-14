import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

import {
    Drawer, Avatar, Title
} from 'react-native-paper'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSignOutAlt, faHome, faBoxes } from '@fortawesome/free-solid-svg-icons'

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

const win = Dimensions.get("window")

export default class DrawerContent extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <DrawerContentScrollView>
                    <View style={styles.DrawerContent}>
                        <View style={styles.userInfoScreen}>
                            <View style={{flexDirection: 'row', marginTop: 15}}>
                                <Avatar.Image
                                    source={require('../Leo.png')}
                                    size={50} />
                                <Title style={[styles.title, {marginLeft: 15}]}>Leo Elmecker</Title>
                            </View>
                        </View>
                    </View>
                    <View style={{marginTop: win.height/25}}>
                        <DrawerItem icon={() => <FontAwesomeIcon icon={faHome} size={25} color={'#3d3d3d'}/>}
                                    label= "Home" 
                                    onPress={() => this.props.navigation.navigate("Home")}/>
                        <DrawerItem icon={() => <FontAwesomeIcon icon={faBoxes} size={25} color={'#3d3d3d'} />}
                                    label= "Inventory" 
                                    onPress={() => this.props.navigation.navigate("Inventory")}/>
                    </View>  
                </DrawerContentScrollView>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem label="Sign Out"
                                icon = { () => 
                                    <FontAwesomeIcon icon={faSignOutAlt} size={25} color={"#3d3d3d"} onPress={() => this.props.navigation.navigate("Start")} />
                                    // <Icon name="exit-to-app"></Icon>
                                }></DrawerItem>
                </Drawer.Section>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1
    },
    userInfoScreen: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection : {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    }
})