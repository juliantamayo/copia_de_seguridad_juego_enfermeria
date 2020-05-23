import React, { Component } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import { Save, ContainerSave } from "../../../elementos/ItemGuardar";

export default class C2_guardar_V_pru_valo4 extends Component {
  constructor(route) {
    super(route);
    // variable global
    global.C2_recibe_pru_valo4 = this.props.route.params?.C2_pv4;
  }
state = {
      'C2_save_pruValo4':0
   }

  saveData = (value2) => {
      AsyncStorage.setItem('C2_save_pruValo4',  global.C2_recibe_pru_valo4.toString());
      this.setState({ 'C2_save_pruValo4':  global.C2_recibe_pru_valo4 });
       Alert.alert("Mensaje","Datos guardados correctamente", [
       
        { text: "OK", onPress: () =>  this.props.navigation.navigate("M_caso2") }
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