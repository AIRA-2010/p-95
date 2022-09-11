
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAZ8pIfOcCQtoCzhvTWCg4mHFvJ1oQLlRs",
      authDomain: "kwitter-98a25.firebaseapp.com",
      databaseURL: "https://kwitter-98a25-default-rtdb.firebaseio.com",
      projectId: "kwitter-98a25",
      storageBucket: "kwitter-98a25.appspot.com",
      messagingSenderId: "630989183451",
      appId: "1:630989183451:web:5468b56f8a495acfe22ffe"
    };
    
    // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML ="WELCOME "+ user_name +" !!";

function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - "+ Room_names);
      row = "<div class='room_name' id=" + Room_names +" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
console.log(name);
localStorage.setItem("room_name",name);
window.location = "kwitter_page.html";
      
}
