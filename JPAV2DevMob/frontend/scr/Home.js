// João Pedro Gomes de Lemos
// 0050016060
import * as React from 'react';
import { Alert, Pressable,StyleSheet, Text, View } from 'react-native';



export default function Home({ navigation }) {
  const title = "Artilheiros Brasileirão";
  const title2 = "Artilheiros Libertadores";
  const instr = "Campeões Brasileirão";
  const instr1 = "Campeões Libertadores";

  return (
    <View style={styles.container}>
        <Pressable 
            style={styles.btnI} 
            onPress={() => navigation.navigate("Artilheiros Brasileirão")}
            >
              <Text style={styles.text}>{title}</Text>
          </Pressable>

          <Pressable 
            style={styles.btnI} 
            onPress={() => navigation.navigate("Campeões Brasileirão")}
            >
              <Text style={styles.text}>{instr}</Text>
          </Pressable>

          <Pressable 
            style={styles.btnI} 
            onPress={() => navigation.navigate("Campeões Libertadores")}
            >
              <Text style={styles.text}>{instr1}</Text>
          </Pressable>

          <Pressable 
            style={styles.btnI} 
            onPress={() => navigation.navigate("Artilheiros Libertadores")}
            >
              <Text style={styles.text}>{title2}</Text>
          </Pressable>
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
    marginBottom:5,
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
    marginBottom:50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 42,
    borderRadius: 100,
    elevation: 3,
    backgroundColor: 'gray',
  },
});