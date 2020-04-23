import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyAIu155_0hfNoob2853D2g7Kram69Dut5w",
  authDomain: "inventory-control-react.firebaseapp.com",
  databaseURL: "https://inventory-control-react.firebaseio.com",
  projectId: "inventory-control-react",
  storageBucket: "inventory-control-react.appspot.com",
  messagingSenderId: "983603145312",
  appId: "1:983603145312:web:5271e9fdf04809dd90b105",
};
// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
