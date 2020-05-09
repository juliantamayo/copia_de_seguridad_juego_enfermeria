//------------bloqueo boton atras android
/*
import React, {Component,} from 'react';
import {
    View,
    Text,
    BackHandler,
    ToastAndroid,
} from 'react-native';

export default class BackButtonDemo extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }

    render() {
        return (
            <View>
                <Text>Back button example</Text>
            </View>
        );
    }
}
*/

//------- scroll horizontal pantallas
/*
import React, { Component } from 'react'
import { View, Image, StatusBar, Dimensions, Text } from 'react-native'
import Swiper from 'react-native-swiper'
const { width, height } = Dimensions.get('window')

const styles = {
  wrapper: {
    // backgroundColor: '#f00'
  },

  slide: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  container: {
    flex: 1
  },

  imgBackground: {
    width,
    height,
    backgroundColor: 'transparent',
    position: 'absolute'
  },

  image: {
    width,
    height
  },
  modalText: {
   // marginBottom: 15,
    textAlign: "center",
     
  }
}

export default class extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Image source={require('../../assets/images/bg.jpg')} style={styles.imgBackground} />
        <Swiper
          style={styles.wrapper}
          dot={
            <View
              style={{
                backgroundColor: 'rgba(255,255,255,.3)',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#fff',
                width: 13,
                height: 13,
                borderRadius: 7,
                marginLeft: 7,
                marginRight: 7
              }}
            />
          }
          paginationStyle={{
            bottom: 70
          }}
          loop={false}
        >
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/1.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
            <Image
              style={styles.image}
              source={require('../../assets/images/2.jpg')}
              resizeMode="cover"
            />
          </View>
          <View style={styles.slide}>
           <Text style={styles.modalText}>Hello World!</Text>
          </View>
        </Swiper>
      </View>
    )
  }
}
*/
/*

//--------hiden
import React, { Component } from 'react';

import { StyleSheet, Text, View, Button } from 'react-native';

export default class hideshow extends Component {

  constructor(){

    super();

    this.state ={

      isVisible:false,
      isVisible2:false,
      val:0
    }
  }  


  ToggleFunction = () => {
         if(this.state.val<=0){
    this.setState(state => ({

      isVisible: !state.isVisible,
      
    }));
}else if(this.state.val<=2){
      this.setState(state => ({
       isVisible: !state.isVisible,
      isVisible2: !state.isVisible2

    }));
}
  };


  render() {
     const num = <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World4! </Text>;
    return (

      <View style={styles.MainContainer}>
     <Button title="Toggle Visibility" onPress={this.ToggleFunction} />
      {  

        this.state.isVisible ? <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World! </Text> : null
       
      }
      {  

        this.state.isVisible2 ? <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> Hello World2! </Text> : null
      
      }

                    

     
       <Text style= {{ fontSize: 20, color: "red", textAlign: 'center' }}> {this.state.val} </Text>

           {this.state.val <= 0? <Text>data</Text>: null }

      </View>
         
              


    );
  }
}

const styles = StyleSheet.create({

MainContainer :{
justifyContent: 'center',
flex:1,
margin: 10

},
m:{
    flex:0.5,
    width : '100%',
    height : '50%',
    backgroundColor: "gray",
}

});
*/
/*
//This is an example code to understand AsyncStorage// 
import React, { Component } from 'react';
//import react in our code. 

import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity, AsyncStorage } from 'react-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      textInputData: 7,
      //to get the value from the TextInput
      getValue: '',
      //to set the value on Text
    };
  }
  saveValueFunction = () => {
    //function to save the value in AsyncStorage
    if(this.state.textInputData){
      //To check the input not empty
      AsyncStorage.setItem('any_key_here', this.state.textInputData);
      //Setting a data to a AsyncStorage with respect to a key 
      this.setState({ textInputData: '' })
      //Resetting the TextInput
      alert('Data Saved');
      //alert to confirm
    }else{
      alert('Please fill data');
      //alert for the empty InputText
    }
  };
  getValueFunction = () => {
    //function to get the value from AsyncStorage
    AsyncStorage.getItem('any_key_here').then(value =>
      //AsyncStorage returns a promise so adding a callback to get the value
      this.setState({ getValue: value })
      //Setting the value in Text 
    );
  };
  render() {
    return (
      <View style={styles.MainContainer}>
        <TextInput
          placeholder="Enter Some Text here"
          value={this.state.textInputData}
          onChangeText={data => this.setState({ textInputData: data })}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyle}
        />
        <TouchableOpacity
          onPress={this.saveValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> SAVE VALUE </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.getValueFunction}
          style={styles.button}>
          <Text style={styles.buttonText}> GET VALUE </Text>
        </TouchableOpacity>
        <Text style={styles.text}> {this.state.getValue} </Text>

         {this.state.getValue >= 1? <Text>data2</Text>: null }
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    alignItems: 'center',
    flex: 1,
    margin: 10,
    marginTop:60
  },
  TextInputStyle: {
    textAlign: 'center',
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderColor: '#808000',
  },
  button: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808000',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});
*/
/*
import React from 'react'
import { Text, View } from 'react-native'
import Swiper from 'react-native-swiper'

var styles = {
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
}

export default () => (
  <Swiper style={styles.wrapper} showsButtons loop={false}>
    <View testID="Hello" style={styles.slide1}>
      <Text style={styles.text}>Hello Swiper</Text>
    </View>
    <View testID="Beautiful" style={styles.slide2}>
      <Text style={styles.text}>Beautiful</Text>
    </View>
    <View testID="Simple" style={styles.slide3}>
      <Text style={styles.text}>And simple</Text>
    </View>
  </Swiper>
)
*/

import React, { Component } from 'react'
import { Text, View, Image, Dimensions, ScrollView, StatusBar, ImageBackground } from 'react-native'
import Swiper from 'react-native-swiper'
import style from '../Style.js';
const { width } = Dimensions.get('window')

const styles = {
  wrapper: {},
  slide: {
    flex: 1,
   // justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },
  image: {
    width,
    flex: 1
  },
  paginationStyle: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  paginationText: {
    color: 'black',
    fontSize: 20
  },
   modalText: {
   // marginBottom: 15,
    textAlign: "justify",
    fontSize : 18,
     
  },
  modalTextcuerpo: {
   // marginBottom: 15,
    textAlign: "left",
     marginLeft : 10,
  },
   modalTextnegrillaTitulo: {
   // marginBottom: 15,
   fontSize : 23,
    textAlign: "center",
    fontWeight: "bold",
     borderWidth: 4,
     backgroundColor: 'white'
  },
   modalTextnegrilla: {
   // marginBottom: 15,
   fontSize : 18,
    textAlign: "left",
    fontWeight: "bold",
     marginLeft : 3,
  },
  margen:{
    margin:5
  },
  bordeview:{
    borderWidth: 2,
     margin:5,
    backgroundColor: 'white'
  },
  fondoviewText:{
    backgroundColor: "rgba(0, 185, 188, 0.37)"
  }
}

const renderPagination = (index, total, context) => {
  return (
    <View style={styles.paginationStyle}>
      <Text style={{ color: 'grey' }}>
        <Text style={styles.paginationText}>{index + 1}</Text>/{total}
      </Text>
    </View>
  )
}

export default class extends Component {
  render() {
    return (
       <ImageBackground source={require("../../assets/images/background.png")}style={style.container}>
      <Swiper
        style={styles.wrapper}
        renderPagination={renderPagination} showsButtons loop={false}
        loop={false}
      >
       
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
        <ScrollView  >
       <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00125</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Impotencia</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Experiencia de falta de control sobre una situación, incluyendo la percepción de que las propias acciones no afectan significativamente al resultado</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Complejidad del régimen terapéutico</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Frustración por la incapacidad para realizar las tareas que se realizaban previamente, Dependencia, Insuficiente sentido de control</Text>
                </Text>
                </View>
          </View>
                </ScrollView>
        </View>

        <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00146</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Ansiedad</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Sensación vaga e intranquilizadora de malestar o amenaza acompañada de una respuesta autónoma (el origen de la cual con frecuencia es inespecífico o desconocido para la persona); sentimiento de aprensión causado por la anticipación de un peligro. Es una señal de alerta que advierte de un peligro inminente y permite a la persona tomar medidas para afrontar la amenaza</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Crisis situacional,Grandes cambios (p. ej. el estado de salud)</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Irritabilidad, Alteración en la atención, Confusión, Disminución de la habilidad para resolver problemas, Disminución del campo perceptivo, Preocupación por los cambios en acontecimientos vitales</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={<Text numberOfLines={1}></Text>}
        >
         <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
         <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00069</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Afrontamiento ineficaz</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Incapacidad para formular una apreciación válida de los agentes estresantes, elecciones inadecuadas de respuestas llevadas a la práctica y/o incapacidad para utilizar los recursos disponibles</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Crisis situacional, Incertidumbre, Insuficiente sentido de control</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Cambio en el patrón de la comunicación,Incapacidad para satisfacer las necesidades básicas,Insuficiente resolución de los problemas</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
         <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
         <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00078</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Gestión ineficaz de la salud</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Patrón de regulación e integración en la vida diaria de un régimen terapéutico para el tratamiento de la enfermedad y sus secuelas que no es adecuado para alcanzar los objetivos de salud específicos</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Complejidad del régimen terapéutico, Demandas excesivas, Impotencia, Percepción de la gravedad de su condición</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>No incluye el régimen de tratamiento en la vida diaria, Dificultades con el tratamiento prescrito</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
        <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
          <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00085</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Deterioro de la movilidad física</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Limitación del movimiento físico independiente intencionado del cuerpo o de una o más extremidades</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Deterioro neuromuscular, Deterioro sensorio perceptivo, Disminución de la fuerza muscular, Disminución de la resistencia, Disminución del control muscular</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Alteraciones en la marcha, Aumento del tiempo de reacción, Dificultad para girarse, disconfort, Disminución de las habilidades motoras finas, Disminución de las habilidades motoras gruesas, Enlentecimiento del movimiento, Inestabilidad postural, Limitación de la amplitud de movimientos, Movimientos descoordinados, Movimientos espásticos</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
         <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
         <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00051</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Deterioro de la comunicación verbal</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Disminución, retraso o carencia de la capacidad para recibir, procesar, transmitir y/o usar un sistema de símbolos</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Deterioro del sistema nervioso central, Alteración en la percepción</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Dificultad para expresar los pensamientos verbalmente (afasia, apraxia), Dificultad para formar palabras (disartria), Dificultad para mantener la comunicación, Desorientación en el tiempo</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
         <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
         <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00102</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Déficit de autocuidado: alimentación</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Deterioro de la capacidad para realizar o completar por uno mismo las actividades de autoalimentación</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Deterioro neuromuscular, Desórdenes perceptuales</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Deterioro de la capacidad para autoalimentarse con una comida completa, Deterioro de la capacidad para deglutir los alimentos</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
        <View
          style={styles.slide}
          title={
            <Text numberOfLines={1}></Text>
          }
        >
         <ScrollView  >
        <StatusBar barStyle="dark-content" />
                
                <Text style={styles.modalTextnegrillaTitulo}>Proceso de atención de enfermería </Text>  
                <Text style={styles.margen}></Text>
         <View style={styles.fondoviewText}>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Etiqueta Nanda: </Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Código: </Text>
                <Text style={styles.modalText}>00109</Text>
                </Text>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Diagnóstico: </Text>
                <Text style={styles.modalText}>Déficit de autocuidado: vestido</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>Definición Nanda: </Text>
                <Text style={styles.modalText}>Deterioro de la capacidad para realizar o completar por uno mismo las actividades de vestido y arreglo personal</Text>
                </Text>
                </View>
                 <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>R/C Relacionado con: </Text>
                <Text style={styles.modalText}>Deterioro neuromuscular, Desórdenes perceptuales</Text>
                </Text>
                </View>
                <View style={styles.bordeview}>
                <Text style={styles.modalTextcuerpo}>
                <Text style={styles.modalTextnegrilla}>E/P Evidenciado por: </Text>
                <Text style={styles.modalText}>Deterioro de la capacidad de ponerse las prendas de vestir necesarias (p. ej., camisa, calcetines, zapatos, Deterioro de la capacidad para quitarse las prendas de vestir necesarias (p. ej., camisa, calcetines, zapatos)</Text>
                </Text>
                </View>
         </View>
                </ScrollView>
        </View>
      </Swiper>
      </ImageBackground>
    )
  }
}