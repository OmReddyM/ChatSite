var firebaseConfig = {
    apiKey: "AIzaSyA49rBWmPizgzcxGkftz7SbiiwWCXw0co0",
    authDomain: "kwitter-db-8a47b.firebaseapp.com",
    databaseURL: "https://kwitter-db-8a47b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "kwitter-db-8a47b",
    storageBucket: "kwitter-db-8a47b.appspot.com",
    messagingSenderId: "471817541894",
    appId: "1:471817541894:web:bf846811dd612abf53a687"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
// Actual Code
document.getElementById("welcome").innerHTML = "Welcome, " + localStorage.getItem("Username");
function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; Room_names = childKey;
            //Start code
            console.log(Room_names);
            room = '<div class="room_name" id=' + Room_names + ' onclick="redirectToRoomName(this.id)">#' + Room_names + "</div><hr>"
            document.getElementById("output").innerHTML = room;
            //End code
        });
    });
}
getData();

function addRoom() {
    RoomName = document.getElementById("roomName").value;
    firebase.database().ref("/").child(RoomName).update({
        purpose: "For future reference"
    });
    localStorage.setItem("RoomName", RoomName);
    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("roomName", name);
    window.location = "kwitter_page.html";
}

function logOut() {
    localStorage.removeItem("roomName");
    localStorage.removeItem("Username");
    window.location.replace("index.html");
}