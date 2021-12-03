import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function Instrucoes() {
  return (
    <View style={styles.container}>
        <Text style={styles.txtB}>
          Seja bem vindo!
        </Text>
        <Text style={styles.txtc}>
          As regras são bem simples: Dentro de 2 minutos, tente acertar as perguntas sobre determinado assunto que você escolher. Ganhará um ponto de Score caso acerte, mas se errar, perderá um. Ganha o Quiz ao acertar mais de 5 perguntas, e perde ao fazer -5 pontos 
        </Text>
        <Text style={styles.txtc}>
          Ao finalizar o primeiro Quiz, será disponibilizado um outro nível (ainda em produção)
        </Text>
        <Text style={styles.txtc}>
          Bom jogo e boa sorte, caso não saiba, já sabe... CHUTA AÍ
        </Text>
       


 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#AED8FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtc:{
    fontSize: 18,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
    marginBottom:10,
    textAlign:'center',
  },
  txtB:{
    fontSize: 22,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom:10,
    textAlign:'center',
  }
});