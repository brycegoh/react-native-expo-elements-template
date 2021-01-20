import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, ThemeProvider } from 'react-native-elements';

// firebase setup
import firebaseConfig from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore';

firebase.initializeApp(firebaseConfig);
const store = firebase.firestore();


// firebase test
const triggerSet = () => {
  store.collection("characters").doc("mario").set({
    employment: "plumber",
    outfitColor: "red",
    specialAttack: "fireball"
  })
  return
}

const triggerGet = async () => {
  const snapshot = await store.collection("characters").doc("mario").get()
  const data = snapshot.data()
  console.log( data.employment )
  return
}

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!</Text>
      <StatusBar style="auto" />
      <ThemeProvider>
      <Button title="hello" onPress={triggerGet} />
    </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
