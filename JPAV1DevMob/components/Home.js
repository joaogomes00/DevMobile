import * as React from 'react';
import { Alert, Pressable,StyleSheet, Text, View } from 'react-native';



export default function Home({ navigation }) {
  const title = "Brasileirão";
  const title2 = "Quiz Copas";
  const instr = "Instruções";
  return (
    <View style={styles.container}>
        <Pressable 
            style={styles.btnI} 
            onPress={() => navigation.navigate("Instrucoes")}
            >
              <Text style={styles.text}>{instr}</Text>
          </Pressable>
        <Text style={styles.txtc}>
            Selecione uma opção de jogo
        </Text>
        <Pressable 
            style={styles.btn} 
            onPress={() => navigation.navigate("QuizBR")} 
            >
              <Text style={styles.text}>{title}</Text>
          </Pressable>

          <Pressable 
            style={styles.btn} 
            onPress={() => Alert.alert('Em Breve')} 
            // disabled
            >
              <Text style={styles.text}>{title2}</Text>
          </Pressable>


        {/* <Button title="Opção 2" onPress={() => navigation.navigate("")} />
        <Button title="Opção 3" onPress={() => navigation.navigate("")} />
        <Button title="Opção 4" onPress={() => navigation.navigate("")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    marginBottom:10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 42,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 12,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  txtc:{
    fontSize: 18,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    marginBottom:10,
  },
  btnI:{
    marginBottom:100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 42,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'gray',
  },
});
