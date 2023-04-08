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

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



