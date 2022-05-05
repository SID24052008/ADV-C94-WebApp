
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyA2w6NbIHDtw9IDj6SYmVHi4WH-0NAVJ7U",
      authDomain: "web-app-7aa6a.firebaseapp.com",
      projectId: "web-app-7aa6a",
      storageBucket: "web-app-7aa6a.appspot.com",
      messagingSenderId: "755266721682",
      appId: "1:755266721682:web:8fd38bf9cdb6935fe8934b"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();