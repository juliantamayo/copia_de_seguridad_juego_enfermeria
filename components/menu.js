import React, {Component } from 'react';
import {Text, 
        View, 
        Button,
        ImageBackground,
        Image,
        TouchableOpacity    
      } from 'react-native';
  import styles from './Style.js';
 // import im from '../assets/images/background.png';
 import { CommonActions } from '@react-navigation/native';

export default function menu ({navigation, route}) {


 
    return (
   //  <Imagebackground style={styles.container}>
    <ImageBackground source={require("../assets/images/background.png")}style={styles.container}>
       <View style={styles.header}>   
      <View style={styles.headerIzquierda}>
     <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/button-settings.png")} />
      </TouchableOpacity>
</View>


<View style={styles.headerDerecha}>    
  <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                },
                { name: 'M_juegos' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/buttonMinijuegos.png")} />
      </TouchableOpacity>
      
       <TouchableOpacity style={ styles.imageContainer } activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
             
                },
                { name: 'pruebaT' },
              ],
            })
          )
        }>
               <Image style={ styles.image } source={require("../assets/images/buttonteory.png")} />
      </TouchableOpacity>
      </View>

      </View>



      <View style={styles.vBody}>
       
        
        <TouchableOpacity style={ styles.imageContainer} activeOpacity={0.8}
       onPress={() => 
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [
                {
                  name: 'Menu',
                },
                { name: 'M_casos' },
              ],
            })
          )
        }>
               <Image style={ styles.image2 } source={require("../assets/images/buttonstart.png")} />
      </TouchableOpacity>
       </View>
    
        </ImageBackground>
  );
  
}


