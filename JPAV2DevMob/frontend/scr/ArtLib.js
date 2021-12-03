// João Pedro Gomes de Lemos
// 0050016060
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ArtLib() {

  const [data,setData] = useState([{}]);
  
  useEffect( () => {
    fetch("http://localhost:5000/artilheiroslib").then(
        response => response.json()
      ).then(
        data1 => {
          setData(data1);
          console.log(data1);
        })
  }, [])

  return (
    <View style={styles.container}>
      {(typeof data.artilheiroslib === 'undefined') ?
      (
        <p>Carregando.....</p>
      ): (
        data.artilheiroslib.map((artlib, i) =>(
          <p key={i}>{artlib}</p>
        ))
      )

      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});