import { 
    StyleSheet,
    SafeAreaView,
    View,
    TouchableWithoutFeedback,
    Text,
    Image,
    Dimensions,
    Button,
    TouchableOpacity,
    Modal,
   } from "react-native";
  import React, { useState, useRef } from "react";
  import { Stack, Redirect, router } from "expo-router";

const Footer = () => {

  return (
        <View style={styles.footerContainer}>
            <View style={styles.shadow}/>
            <View style={styles.footerBox}>
                <TouchableOpacity style={styles.button} onPress={() => {router.push('/home')}}>
                    <Image source={require('../../assets/icons/home.png')} style={{ height: 24, width: 24}}/>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {router.push('/control-panel')}}>
                    <Image source={require('../../assets/icons/control-panel.png')} style={{ height: 25, width: 25 }}/>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Control Panel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => {router.push('/profile')}}>
                    <Image source={require('../../assets/icons/profile.png')} style={{ height: 24, width: 24}}/>
                    <Text style={{ fontWeight: '500', color: 'grey' }}>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
    footerBox: {
        position: 'absolute',
        left: 0, 
        right: 0, 
        bottom: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        elevation: 100,
        padding: 10,
        backgroundColor: 'white'
    },
    shadow: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: -65, // Adjust this value to control the size of the shadow
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        elevation: 5, // Semi-transparent black color for the shadow
    },
    footerContainer: {
        position: 'absolute',
        left: 0, 
        right: 0, 
        bottom: 0,
    },
    button: {
        flex: 0, 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})