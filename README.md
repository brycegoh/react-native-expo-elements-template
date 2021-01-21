# react native with expo + firebase template

[react native docs](https://reactnative.dev/docs/environment-setup)

[expo docs](https://docs.expo.io/workflow/expo-cli/)

[react native elements docs](https://reactnativeelements.com/docs/overview)

[expo firebase docs](https://docs.expo.io/guides/using-firebase/?redirected)

[firestore docs](https://firebase.google.com/docs/firestore)

[react navigation docs](https://reactnavigation.org/docs/hello-react-navigation)


# Install dep
`npm install`

# Rename App
In `app.js`
```
"name": "rename this",
"slug": "rename this",
```

# Run local
```
npm run start
npm run ios
npm run android
```

# Firebase firestore
```js
firebase.initializeApp(firebaseConfig);
const store = firebase.firestore();

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
```
# React Navigation
```js
    onPress={() => navigation.navigate('Details')} // go to Details component
```
