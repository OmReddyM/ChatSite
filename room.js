// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBp7qDWIWurLyz661suJdOnFj-LVR8vWW4",
    authDomain: "practice-app-8cfdc.firebaseapp.com",
    databaseURL: "https://practice-app-8cfdc-default-rtdb.firebaseio.com",
    projectId: "practice-app-8cfdc",
    storageBucket: "practice-app-8cfdc.appspot.com",
    messagingSenderId: "986014958631",
    appId: "1:986014958631:web:c97f39fb2c4b86e509fa02"
};
// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
// Code
roomName = localStorage.getItem("RoomName");
function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);
                Name = message_data['name'];
                Message = message_data['message'];
                Likes = message_data['likes']
                NameTag = "<h4>" + Name + "<img class='user_tick' src='tick.png'></h4>";
                MessageTag = "<h4 class='message_h4'>" + message + "</h4>";
                LikesTag = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + Likes + " onclick='updateLike(this.id)'><span class='glyphicon glyphicon-thumbs-up'>Like " + Likes + "</span></button><hr>";
                document.getElementById("Output").innerHTML += (NameTag + MessageTag + LikesTag);
                //End code
            }
        });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name: user_name, message: msg, like: 0
    });
    document.getElementById("msg").value = "";
}

function updateLike(messageId) {
    console.log("Clicked on Like Button - " + messageId);
    likes = document.getElementById(messageId).value;
    Likes = Number(likes) + 1;
    console.log(Likes);

    firebase.database().ref(roomName).child(messageId).update({
        likeCount: Likes
    });
}

function logout() {
    localStorage.removeItem("roomName");
    localStorage.removeItem("Username");
    window.location.replace("index.html");
}