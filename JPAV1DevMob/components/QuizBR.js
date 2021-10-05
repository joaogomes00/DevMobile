// João Pedro Gomes de Lemos
// 0050016060
import * as React from 'react';
import { StyleSheet, Animated, View,Text   } from 'react-native';
import CardsJ1 from  './CardsJ1.js'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

export default function Jogo1() {
  const [isPlaying] = React.useState(true)

  return (
    <View style={styles.container}>   
        <CountdownCircleTimer
        isPlaying={isPlaying}
        duration={120}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2],
        ]}
        onComplete={() => {

          <View style={styles.container}> 
          <Text style={styles.lose}>Fim de Jogo</Text>
          </View>

          return [false]
        }}
    >
      
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor, fontSize: 30}}>
          {remainingTime}
        </Animated.Text>
      )}
    </CountdownCircleTimer>
    <CardsJ1></CardsJ1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  lose:{
    width:400,
    height:400,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  complete:{
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
