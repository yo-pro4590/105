// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyDqBkct8j5kH6v4b4fyHlpEtxffRRuYsj0",

  authDomain: "c100-c39d7.firebaseapp.com",
  databaseURL: "https://c100-c39d7-default-rtdb.firebaseio.com",
  projectId: "c100-c39d7",
  storageBucket: "c100-c39d7.appspot.com",
  messagingSenderId: "347882223500",
  appId: "1:347882223500:web:ad168afbcdb539b6a348a9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
  console.log("Room_Name - ", Room_names);
  
  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
 document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();
function logout(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";

}
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name" , name);
  window.location = "chat_page.html";
}
function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose : "adding room"
  })
  localStorage.setItem("room_name", room_name);
window.location = "chat_page.html";

}