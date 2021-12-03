// João Pedro Gomes de Lemos
// 0050016060
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CampBr() {

  const [data,setData] = useState([{}]);
  
  useEffect( () => {
    fetch("http://localhost:5000/campeoesbr").then(
        response => response.json()
      ).then(
        data1 => {
          setData(data1);
          console.log(data1);
        })
  }, [])

  return (
    <View style={styles.container}>
      {(typeof data.campeoesbr === 'undefined') ?
      (
        <p>Carregando.....</p>
      ): (
        data.campeoesbr.map((campbr, i) =>(
          <p key={i}>{campbr}</p>
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