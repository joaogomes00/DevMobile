// João Pedro Gomes de Lemos
// 0050016060
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './scr/Home';
import ArtBr from './scr/ArtBr';
import CampBr from './scr/CampBr';
import CampLib from './scr/CampLib';
import ArtLib from './scr/ArtLib';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
          name = "Home" 
          component={Home}/>
        <Stack.Screen 
          name = "Artilheiros Brasileirão" 
          component={ArtBr}/>
          <Stack.Screen 
          name = "Campeões Brasileirão" 
          component={CampBr}/>
          <Stack.Screen 
          name = "Campeões Libertadores" 
          component={CampLib}/>
          <Stack.Screen 
          name = "Artilheiros Libertadores" 
          component={ArtLib}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

