import * as firebase from "firebase";

let firebaseProject = "bugcycle-5ff5f"
let apiKey = "AIzaSyAJYuOvrkAkq24qUIAbB9LNA_KjBJn1jCg"

// Initialize Firebase
const config = {
  apiKey,
  authDomain: `${firebaseProject}.firebaseapp.com`,
  databaseURL: `https://${firebaseProject}.firebaseio.com`,
};

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();