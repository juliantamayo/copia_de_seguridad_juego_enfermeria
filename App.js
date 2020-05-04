
import React, {Component, useEffect} from 'react';
import { Button, View, Text, StyleSheet, BackHandler, Alert } from 'react-native';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/load';
import Menu from './components/menu';
import M_juegos from './components/Juegos/m_juegos';

//-------------------------------juego2-------------------------
import M_juegos2 from './components/Juegos/Juego2/m_juego2';
import QuizIndex from "./components/Juegos/Juego2/QuizIndex";
import Quiz from "./components/Juegos/Juego2/Quiz";
import spaceQuestions from "./components/data/space";
import westernsQuestions from "./components/data/westerns";
import computerQuestions from "./components/data/computers";
import Result_Q from './components/Juegos/Juego2/result_q';

//--------------------------------juego1--------------------------------
import juego1_part1 from './components/Juegos/Juego1/juego1_part1';
import juego1_part2 from './components/Juegos/Juego1/juego1_part2';
import Result_QJ1 from './components/Juegos/Juego1/result_qJ1';
import m_juego1 from './components/Juegos/Juego1/m_juego1';
import juego1_teory1 from './components/Juegos/Juego1/juego1_teory1';
import juego1_teory2 from './components/Juegos/Juego1/juego1_teory2';

//--------------------------------juego3----------------------------
import M_juegos3 from './components/Juegos/Juego3/m_juego3';
import juego3 from './components/Juegos/Juego3/juego3';
import Result_QJ3 from './components/Juegos/Juego3/result_qJ3';
//---------------------------------------------------------------
import pruebaT from './components/Teoria/prueba_atras';
import pruebaT2 from './components/Teoria/HomeContainer';
import pruebaT3 from './components/Teoria/AsyncStorageExample';

//-----------------------casos--------------------------------
import M_casos from './components/Casos/m_casos';

//-------------------------caso1---------------------------------
import M_caso1 from './components/Casos/Caso1/menu_caso1';
import Escena1 from './components/Casos/Caso1/escena1';
import Guardar_escena1 from './components/Casos/Caso1/V_Guardar/guardar_escena1';
import Escena2 from './components/Casos/Caso1/escena2';
import DialogosC1 from './components/Casos/Caso1/V_Preguntas_Pcte/dialogos';
import V_C1_Resp_enfermera from './components/Casos/Caso1/V_Preguntas_Pcte/V_C1_Resp_enfermera';
import PreguntasC1 from './components/Casos/Caso1/V_Preguntas_Pcte/preguntas';
import Variables from './components/Casos/Caso1/variables_caso1';


const Stack = createStackNavigator();





export default function App () {

useEffect(() => {
    const backAction = () => {
      Alert.alert("Advertencia", "esta seguro que desea salir de la aplicacion?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [])
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="Home" component={HomeScreen} 
        options={{
        //  headerLayoutPreset: 'center',
          headerShown: false,
          headerLeft: null,
          title: 'My home',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen  name="Menu" component={Menu} 
        options={{
        //  headerShown: false
         headerLeft: null,
          title: 'Menu',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="M_juegos" component={M_juegos} 

        options={{
         // headerShown: false
         headerLeft: null,
          title: 'Minijuegos',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>
        <Stack.Screen name="M_juego2" component={M_juegos2} 
        options={{
         headerLeft: null,
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="QuizIndex" component={QuizIndex} 
        options={{
        //  headerShown: false
        headerLeft: null,
          title: 'Preguntas',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>
         <Stack.Screen name="Quiz" component={Quiz} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>
        <Stack.Screen name="Result_Q" component={Result_Q} 
        options={{
           headerLeft: null,
          title: 'Resultado',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

           
         <Stack.Screen name="m_juego1"  component={m_juego1}
          options={{
         headerLeft: null,
          title: 'Juego 1',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
        <Stack.Screen name="juego1_part1" component={juego1_part1 }
         options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>

        <Stack.Screen name="juego1_part2" component={juego1_part2}
          options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}
         />
        <Stack.Screen name="Result_QJ1" component={Result_QJ1} 
        options={{
          headerLeft: null,
          title: 'ResultadoJ1',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="juego1_teory1" component={juego1_teory1} />
        <Stack.Screen name="juego1_teory2" component={juego1_teory2} />

        <Stack.Screen name="M_juegos3"  component={M_juegos3}
          options={{
         headerLeft: null,
          title: 'Juego 3',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="juego3" component={juego3}
         options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>
      <Stack.Screen name="Result_QJ3" component={Result_QJ3} 
        options={{
           headerLeft: null,
          title: 'ResultadoJ3',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>

        <Stack.Screen name="M_casos" component={M_casos} 

        options={{
         // headerShown: false
         headerLeft: null,
          title: 'M_casos',
           headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

        }}/>

        <Stack.Screen name="M_caso1"  component={M_caso1}
          options={{
         headerLeft: null,
          title: 'M_caso1',
          headerStyle: {
            backgroundColor: '#fbe122',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />

        <Stack.Screen name="Escena1" component={Escena1} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>  

       <Stack.Screen name="Guardar_escena1"  component={Guardar_escena1} />

       <Stack.Screen name="Escena2" component={Escena2} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/> 

        <Stack.Screen name="DialogosC1" component={DialogosC1} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/> 
         <Stack.Screen name="PreguntasC1" component={PreguntasC1} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/> 

         <Stack.Screen name="V_C1_Resp_enfermera" component={V_C1_Resp_enfermera} 
        options={
           
        ({ navigation, route }) => ({ title: route.params?.title ,
          headerLeft: null,
          headerStyle: {
         backgroundColor: '#fbe122',
         borderBottomColor: route.params?.color
        }


       })}/>




         <Stack.Screen name="pruebaT"  component={pruebaT} />
         <Stack.Screen name="pruebaT2"  component={pruebaT2} />
         <Stack.Screen name="pruebaT3"  component={pruebaT3} />
          <Stack.Screen name="Variables"  component={Variables} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  
});

