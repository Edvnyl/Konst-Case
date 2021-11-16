import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Location from 'expo-location';


export default function App() {

  // Asking for permission to use location in the app 
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen} />

        {/* Konstrunda */}
        <Stack.Screen name='Konstrunda' component={KonstrundaScreen} />
        <Stack.Screen name='Studenter' component={StudenterScreen} />
        <Stack.Screen name='Fråga' component={FrågaScreen} />

        {/* Katalog */}
        <Stack.Screen name='Katalog' component={KatalogScreen} />
        <Stack.Screen name='Konstverk' component={KonstverkScreen} />

        {/* Navigation och information */}
        <Stack.Screen name='Navigera' component={NavigeraScreen} />
        <Stack.Screen name='Information' component={InformationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Hello world</Text>
    </View>
  )
}

function KonstrundaScreen({ navigation }) {
  <Text>Hello world</Text>

}

function StudenterScreen({ navigation }) {
  <Text>Hello world</Text>

}

function FrågaScreen({ navigation }) {
  <Text>Hello world</Text>

}

function KatalogScreen({ navigation }) {
  <Text>Hello world</Text>

}

function KonstverkScreen({ navigation }) {
  <Text>Hello world</Text>

}


function NavigeraScreen({ navigation }) {
  <Text>Hello world</Text>

}

function InformationScreen({ navigation }) {
  <Text>Hello world</Text>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
