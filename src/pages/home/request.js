import firebase from "../../services/firebase";
  
export default function getList() {
    firebase
      .database()
      .ref("estoque")
      .once("value", (snapshot) => {
        var estoque = snapshot.val()
        return(estoque);
      })
}