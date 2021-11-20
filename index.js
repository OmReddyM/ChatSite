function addUser(){
    var Username = document.getElementById("username").value;
    localStorage.setItem("Username", Username);
    window.location = "room.html";
}