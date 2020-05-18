
import React, { Component } from 'react';

import { StyleSheet, 
  View, 
  Text,
  TouchableOpacity, 
  Button, AsyncStorage,Alert,ImageBackground,
  Image,
  StatusBar,ScrollView } from 'react-native';
import style from '../../../Style.js';

export default class guardar_escena1 extends Component {
 
state = {
       caja:this.props.route.params?.check1,
       caja2:this.props.route.params?.check2,
       arraycheckRecibe:this.props.route.params?.arraycheckR,
       arraycomparar:[1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1]
   }

     
  render() {
    var helloMessage=<Text>1</Text>;
    if (this.state.caja==1) {
     helloMessage = <View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 1
        </Text>
        </View>
         <View style={styles.viewcheck}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View>;
        var correct=<Text></Text>;
       for (var i = 0; i <= this.state.arraycheckRecibe.length; i++) {
         if (this.state.arraycheckRecibe == this.state.arraycomparar) {
           correct= this.state.arraycheckRecibe.map((item, key)=>(
         <Text key={key} style={styles.text}>{ item } </Text>)
         )
           
         }else if (this.state.arraycheckRecibe ==this.state.arraycomparar) {
           
         }
       }

  }
    return (
      <ImageBackground source={require("../../../../assets/images/background.png")}style={style.container} resizeMode='contain'>
   <View style={styles.container}>
    <ScrollView  >
    <StatusBar barStyle="dark-content" />
    <View style={style.header}>
    
     <View style={style.headerIzquierda}>
     <TouchableOpacity style={ style.imageContainer } activeOpacity={0.8}
       onPress={() => this.props.navigation.navigate('Escena4')}>
               <Image style={ style.image } source={require("../../../../assets/images/button-back.png")} />
      </TouchableOpacity>
      </View>

      <View style={style.headerDerecha}>
      
      </View>
     
      </View>
   
    <View style={styles.MainContainer}>
        <View style={{ marginBottom: 15 }}>
            <Text style={styles.textStyle}>
            {/*Global Variable*/}
          </Text>
        </View>  
          <View style={styles.button}></View>  
         <View style={style.margen2}></View>
      
         {/*this.state.caja ==1 ?
        <View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 1
        </Text>
        </View>
         <View style={styles.viewcheck}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View>

         :<View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 1
        </Text>
        </View>
         <View style={styles.viewcheckCorrect}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View> */} 
     <View style={style.margen2}></View>
        {/*this.state.caja2 ==1 ?
        <View style={styles.viewcheckbody}>
       <View style={styles.viewchecktext}>
        <Text style={styles.text}>
       Check Box 2
        </Text>
        </View>
         <View style={styles.viewcheck}>
        <Text style={styles.textIncorrec}>
          X
        </Text>
        </View>
     
       </View>

       /*  :null */}  


        <View style={styles.button}></View>
               
               {helloMessage}
      </View>
      <Button onPress={() => this.props.navigation.navigate('M_caso1')} title="guardar" style={styles.button}/>
      <Text  style={styles.text}>{this.state.arraycheckRecibe[2]} </Text>
      </ScrollView>
  </View>
  </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  
 container: {
    flex: 1,
   // alignItems : 'stretch',
    width: "100%",
    height :'100%'
  
  },
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    //backgroundColor: '#fff',
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
   button: {
  
    margin: 5,
  },
  viewcheckbody:{
    flex:1,
  backgroundColor: "rgba(3, 33, 0, 0.47)",
  //backgroundColor: "red",
  color: "#fff",
  flexDirection : 'row',
    width: "100%"
  },
  viewchecktext:{
   flex:0.8
  },
 viewcheck:{
   flex:0.2,
   alignItems :'center',
   justifyContent:'center',
  backgroundColor: "red",
 },
 viewcheckCorrect:{
   flex:0.2,
   alignItems :'center',
   justifyContent:'center',
  backgroundColor: "green",
 },

 text:{
  fontSize: 20,
    textAlign: "left",
   marginLeft : 5,
  //backgroundColor: "#00fa9a",
 },
 textIncorrec:{
  fontSize: 20,
  marginLeft : 5,
  fontWeight: "bold"
  //backgroundColor: "#00fa9a",
 }
});