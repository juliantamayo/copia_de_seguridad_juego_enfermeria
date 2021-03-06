import React, { Component } from 'react';
import { StyleSheet, AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";
export default class C2_guardar_escena1 extends Component {
  constructor(route) {
    super(route);

    global.C2_hola = this.props.route.params?.C2_ex;
  }
state = {
      'C2_intro':0
   }

  saveData = (value) => {
      AsyncStorage.setItem('C2_intro',  global.C2_hola.toString());
      this.setState({ 'C2_intro':  global.C2_hola });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_casos") }
     ]);
       
   } 
   
  render() {
    return (
    <ContainerSave>
                <Save onPress ={this.saveData}/>  
    </ContainerSave>
    );
  }
}
