import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CampLib() {

  const [data,setData] = useState([{}]);
  
  useEffect( () => {
    fetch("http://localhost:5000/campeoeslib").then(
        response => response.json()
      ).then(
        data1 => {
          setData(data1);
          console.log(data1);
        })
  }, [])

  return (
    <View style={styles.container}>
      {(typeof data.campeoeslib === 'undefined') ?
      (
        <p>Carregando.....</p>
      ): (
        data.campeoeslib.map((camplib, i) =>(
          <p key={i}>{camplib}</p>
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