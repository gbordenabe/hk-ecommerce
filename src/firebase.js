import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCZWJlqL0StM0xyvVpN0FWVyauKrSoC6FI",
    authDomain: "hk-ecommerce-b49a6.firebaseapp.com",
    projectId: "hk-ecommerce-b49a6",
    storageBucket: "hk-ecommerce-b49a6.appspot.com",
    messagingSenderId: "804234192194",
    appId: "1:804234192194:web:239a7b344b5fc7da6e94db"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth();

export {auth}