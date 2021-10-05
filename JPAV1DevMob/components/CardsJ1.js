// João Pedro Gomes de Lemos
// 0050016060
import React, { useState } from 'react';
import { Button,Pressable , StyleSheet, Text, TextInput, View,Image,KeyboardAvoidingView } from 'react-native';
import { Audio } from 'expo-av';

export default function CardsJ1() {
     

  async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync(
       require('../assets/sounds/win.mp3')
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync(); }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);


  const [sound, setSound] = React.useState();
  let opcoes = ["Flamengo","Palmeiras","Atlétio-MG" ,"Vasco","Coritiba","Athletico","Bahia","Fluminense","Botafogo","São Paulo","Santos","Corinthians","Internacional","Grêmio","Cruzeiro","Guarani"]
  const [num1,setNum1] = useState("Flamengo");
  const [score,setScore] = useState(0);
  const [resultado,setResultado] = useState("");
  const [acertou,setAcertou] = useState(true);
  const title = "Enviar";


  function time(){
    let tam = opcoes.length - 1
    let res = opcoes[Math.ceil(Math.random()*tam)]
    return res
  }

  function retiraLista(num1){
        var index = opcoes.indexOf(num1);
        opcoes.splice(index,1)
        return opcoes
  }


  const atualizaResult = (value) =>{
    setResultado(value)
  }

  const onTextPress = () =>{
    let result = parseInt(resultado)

    if(num1 === "Flamengo" && result === 2020){
      //resposta certa
      setAcertou(true)
      setScore(score + 1)
      retiraLista(num1)
      setNum1(time())
    
    }
    else if (num1 === "Palmeiras" && result === 2018) {
      setAcertou(true)
      setScore(score + 1)
      retiraLista(num1)
      setNum1(time())
    } 
    else if (num1 === "Santos" && result === 2004) {
       setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Corinthians" && result === 2017) {
       setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "São Paulo" && result === 2008) {
       setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Cruzeiro" && result === 2014) {
       setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 

     else if (num1 === "Vasco" && result === 2000) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Fluminense" && result === 2012) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Internacional" && result === 1979) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Grêmio" && result === 1996) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 

     else if (num1 === "Bahia" && result === 1988) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Guarani" && result === 1978) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Athletico" && result === 2001) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Coritiba" && result === 1985) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Botafogo" && result === 1995) {
        setAcertou(true)
       setScore(score + 1)
       retiraLista(num1)
       setNum1(time())
     } 
     else if (num1 === "Atlétio-MG" && result === 1971) {
      setAcertou(true)
     setScore(score + 1)
     retiraLista(num1)
     setNum1(time())
   } 
    else{
        //resposta certa
        setScore(score - 1)
        setNum1(time())
    }
    setResultado("")
  }

  if(score >= 6){
    return(
      <View style={styles.wincon}>
        <Image
        style={styles.logowin}
        source={{
          uri: 'https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2020/06/gettyimages-842534-1.jpg',
        }}
      />
      <Text style={styles.win}>Voce venceu!!</Text>
      <Text style={styles.win}>Seu score foi de {score} </Text>
      <Button title="Musica da vitória!!" onPress={playSound} />
      </View>
    )
  }
  else if(score <= -5){
    return(
      
      <View style={styles.losecon}>
       <Image
        style={styles.logolose}
        source={{
          uri: 'https://maisqueumjogo.com.br/wp-content/uploads/2018/03/thiagosilvaselecao.jpg',
        }}
      />
      <Text style={styles.lose}>Voce perdeu!!</Text>
      <Text style={styles.lose}>Seu score foi de {score} </Text>
      </View>
    )
  }

  else{
  return (
    <KeyboardAvoidingView style={styles.KBAW}>
    <View style={styles.container}>
      <View style={styles.LogoTexto}>
        <Text></Text>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/Ta%C3%A7a_do_Campeonato_Brasileiro.png',
        }}
      />
            <Text style={styles.Score}>Score:{score}</Text>
      </View>
      
      <Text style={styles.TextoPrincipal}>Em qual ano o {num1} foi campeão a ultima vez?</Text>
        
      
        <TextInput 
              onChangeText={atualizaResult}
              style={styles.TextInput} 
              value={resultado} 
              placeholder="digite aqui" 
              keyboardType="numeric"
              />
        <Pressable 
            style={styles.btn} 

            onPress={onTextPress}
            >
              <Text style={styles.text}>{title}</Text>
        </Pressable>
        
    </View>
    </KeyboardAvoidingView >
  );
}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput:{
    fontSize:15,
    width:50,
    backgroundColor: '#fff',
    textAlign:"center",
    width:250,
  },
  TextoSoma:{
    fontSize:15,
    color:"black",
  },
  TextoPrincipal:{
    flex:0,
    fontSize:22,
    color:"black",
    width:350,
    height:65,
    textAlign:"center",
  },
  Score:{
    flex:0,
    color:"gray",
  },
  LogoTexto:{
    alignItems: 'center',
    marginBottom:5
  },
  TextQuiz:{
    flex:0,
    fontSize:25,
    paddingBottom:0,
    paddingTop:0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    flex:0,
    width: 80,
    height: 100,
    paddingBottom:2,
    alignItems: 'center',
  },
  KBAW:{
    flex:1,
  },
  btn:{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 32,
    borderRadius: 4,
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
  lose:{
    backgroundColor:"red",
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  win:{
    backgroundColor:"#AED8FF",
    fontSize:30,
    textAlign:'center',
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
  wincon:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
    height:350,
  },
  losecon:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%",
    height:"100%",
    height:350,
  },
  logolose:{
    flex:0,
    width: "70%",
    height: "40%",
    alignItems: 'center',
  },
  logowin:{
    flex:0,
    width: "70%",
    height: "40%",
    alignItems: 'center',
  }
});
