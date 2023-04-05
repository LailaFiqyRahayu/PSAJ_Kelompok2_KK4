import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import Home from './components/pages/Home/index';
import ArtikelReformasi from "./components/pages/Artikel_Reformasi/index";
import DetailPres from './components/pages/DetailPres/index';
import PerPolitik from "./components/pages/Perkembangan_Politik/index";
import KebPolitik from "./components/pages/Kebijakan_Politik/index";
import Quiz from "./components/pages/Quiz/index";
import PerEkonomi from "./components/pages/Perkembangan_Ekonomi/index";
import Masyarakat from "./components/pages/Kehidupan_Masyarakat/index";
import SosialEkonomi from "./components/pages/Keadaan_SosialEkonomi/index";
import Pemilu from "./components/pages/Pemilu_2014/index";
import Score from "./components/pages/Score/index";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetailPres" component={DetailPres} />
        <Stack.Screen name="Reformasi" component={ArtikelReformasi} />
        <Stack.Screen name="PerPolitik" component={PerPolitik} />
        <Stack.Screen name="KebPolitik" component={KebPolitik} />
        <Stack.Screen name="Pemilu" component={Pemilu} />
        <Stack.Screen name="PerEkonomi" component={PerEkonomi} />
        <Stack.Screen name="Masyarakat" component={Masyarakat} />
        <Stack.Screen name="SosialEkonomi" component={SosialEkonomi} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}