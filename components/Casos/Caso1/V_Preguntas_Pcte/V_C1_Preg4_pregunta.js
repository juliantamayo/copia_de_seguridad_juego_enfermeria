import React from "react";
import { View, StyleSheet, StatusBar, Text, SafeAreaView, ImageBackground, Image, TouchableHighlight, ScrollView } from "react-native";

import { Button, ButtonContainer } from "../../../elementos/ButtonC1_Preguntas";

import C1_pregunta4_Resp_enfermera from "../../../data/C1_preguntas/C1_pregunta4_Resp_enfermera";

import { Alert } from "../../../elementos/Alert";
import  styles  from "../../../Style_preguntas.js";

const mult =5;

class V_c1_Preg4_pregunta extends React.Component {
   
  state = {
    correctCount: 0, 
    //totalCount: this.props.navigation.getParam("questions", []).length,
    totalCount: this.props.route.params?.questions.length,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false
      
  };

  answer = correct => {
    this.setState(
      state => {
        const nextState = { answered: true };

        if (correct) {
          nextState.correctCount = state.correctCount + 1;
          nextState.answerCorrect = true;

        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      () => {
        setTimeout(() => this.nextQuestion(), 750);
      }
    );
  };

  nextQuestion = () => {
    this.setState(state => {
      const nextIndex = state.activeQuestionIndex + 1;

      if (nextIndex >= state.totalCount && this.state.correctCount < 2) {
       // return this.props.navigation.popToTop();
        return this.props.navigation.navigate('V_C1_Preg4_dialogo',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
      }else if (nextIndex >= state.totalCount   && this.state.correctCount==2) {
       return this.props.navigation.navigate('V_C1_RespP4_enfermera',{repu_enferme:1,experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount),
        title: "Caso 1. Pregunta 4",
          questions: C1_pregunta4_Resp_enfermera,
          color: "#36b1f0"});
      
      }else if (nextIndex < state.totalCount && this.state.correctCount == 0) {
         return this.props.navigation.navigate('V_C1_Preg4_dialogo',{experiencia: (this.state.correctCount*mult)-((this.state.totalCount-this.state.correctCount)*3), correctas:this.state.correctCount,erroneas:(this.state.totalCount-this.state.correctCount)});
      
      } 

      return {
        activeQuestionIndex: nextIndex,
        answered: false
      };
    });
  };

  render() {
    const questions = this.props.route.params?.questions ?? [];
    const question = questions[this.state.activeQuestionIndex];
    
    return (
     
    <ImageBackground source={require("../../../../assets/images/background.png")}style={styles.container} resizeMode='contain'>

    <ScrollView  >
    <StatusBar barStyle="dark-content" />
      
        <StatusBar barStyle="light-content" />
        <SafeAreaView >
        

          <Text style={styles.text}>{question.question}</Text>  
          <View>
          
          

            <ButtonContainer>
              {question.answers.map(answer => (
                <Button
                  key={answer.id}
                  text={answer.text}
                  onPress={() => this.answer(answer.correct)}
                />
              ))}
            </ButtonContainer>
          </View>

          <Text style={styles.textContador}>
            {`${this.state.correctCount}/${this.state.totalCount}`}
          </Text>
          
        </SafeAreaView>
        <Alert
          correct={this.state.answerCorrect}
          visible={this.state.answered}
        />
        </ScrollView>
       </ImageBackground>
    );
  }
}

export default V_c1_Preg4_pregunta;
