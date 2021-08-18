import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Button, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, Alert, Pressable } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Test from '../Bettles/Test';



export default class Buttons extends React.Component {
    render() {
        
        return (
           

            <View onPress={()=> alert('Dafuq', 'GAGO!')} style={styles.container}>
               
                <View style={styles.button}>
                
                <TouchableOpacity style={styles.inner} onPress={()=> {}}>
                    
          <Image source={require('../assets/ALARM.png')}
          style={{ height:80, width:60 }}  />
        
                        <Text>Police Station</Text>
                       
                        </TouchableOpacity>
                    
                </View>
                
                
                
                <View style={styles.button}>
                <TouchableOpacity style={styles.inner} onPress={()=> {}}>
                    
                    
                    <Image source={require('../assets/MEDICAL_ASSISTANCE.png')}
          style={{ height:80, width:60 }}  />
                        <Text>Medical Assistance</Text>
                        
                    
                    </TouchableOpacity>
                  
                </View>
         

                
                <View style={styles.button}>
                <TouchableOpacity style={styles.inner} onPress={()=> {}}>
                    <Image source={require('../assets/FIRE_STATION.png')}
          style={{ height:80, width:60 }}  />
                        <Text>Fire Station</Text>
                        </TouchableOpacity>
                </View>
                
                <View style={styles.button}>
                <TouchableOpacity style={styles.inner} onPress={()=> {}}>
                    <Image source={require('../assets/EDIT_MESSAGE.png')}
          style={{ height:80, width:60 }}  />
                        <Text>Edit Message</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.button}>
                <TouchableOpacity style={styles.inner} onPress={()=> {}}>
                    <Image source={require('../assets/ALARM.png')}
          style={{ height:80, width:60 }}  />
                        <Text>Siren Button</Text>
                        </TouchableOpacity>
                </View>
                
            </View>



        );
    }

}

function tests() {
    return (
      <View >
        <Test />
         
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFFF66',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        height: '85%',
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    button: {
        width: '40%',
        height: '20%',
        padding: 10,
        


    },
    inner: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 10,
            height: 10
          },
         
        
    },
});

