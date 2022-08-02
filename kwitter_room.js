var firebaseConfig = {
      apiKey: "AIzaSyCVhR8RVh7h2VPQjEnHfLw87E3_V9Vim2o",
      authDomain: "kwitter2-975b6.firebaseapp.com",
      databaseURL: "https://kwitter2-975b6-default-rtdb.firebaseio.com",
      projectId: "kwitter2-975b6",
      storageBucket: "kwitter2-975b6.appspot.com",
      messagingSenderId: "338670635083",
      appId: "1:338670635083:web:e8f915af999c8f958265ce"
    };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE 
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
            //Start code

            //End code
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";}
      function logout() {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.loaction = "index.html";
      }
