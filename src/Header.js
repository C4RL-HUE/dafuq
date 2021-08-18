import React from 'react';

import {
    SafeAreaView, StyleSheet, View, Text, Button, ImageBackground, Image
} from 'react-native';

export default class Header extends React.Component {
    render() {
        return (


            <View style={styles.container}>
                
                    <View style={styles.Prof}>
                   
                    <Text style={{ fontSize:25 }}>I NEED HELP<Image source={require('../assets/repeat-1.png')}
          style={{ height:35, width:35 }}  /></Text>
                    </View>
              
                    <View style={styles.Circle}>
                    <Image source={require('../assets/user.png')}
          style={{ height:50, width:40,marginTop:10 }}  />
                </View>
                
            </View>


        );
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        

       
        width: '100%',
        height: '25%',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },
    Circle: {
        marginHorizontal: 20,
        marginTop:80,
        width: '20%',
        height: '40%',
        alignItems: 'center',
        borderRadius: 100 ,
        backgroundColor: "#FFFF66",

    },
    
    
    Prof: {
        backgroundColor:'transparent',
        marginHorizontal: 20,
        marginTop: 40,
       
    },

});

