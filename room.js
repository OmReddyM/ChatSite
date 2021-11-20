const firebaseConfig = {
    apiKey: "AIzaSyA49rBWmPizgzcxGkftz7SbiiwWCXw0co0",
    authDomain: "kwitter-db-8a47b.firebaseapp.com",
    databaseURL: "https://kwitter-db-8a47b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-db-8a47b",
    storageBucket: "kwitter-db-8a47b.appspot.com",
    messagingSenderId: "471817541894",
    appId: "1:471817541894:web:bf846811dd612abf53a687"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Actual Code
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;
                //Start code

                //End code
          });
    });
}
getData();
function logOut() {
    localStorage.removeItem("roomName");
    localStorage.removeItem("Username");
    window.location.replace("index.html");
}