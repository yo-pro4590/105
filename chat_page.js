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
  room_name=localStorage.getItem("room_name")
   user_name=localStorage.getItem("user_name")
  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,

        like:0,
    })

    document.getElementById("msg").value = "";
  }
  function getData() 
  { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
  { document.getElementById("output").innerHTML = "";
   snapshot.forEach(function(childSnapshot) 
   { childKey = childSnapshot.key; childData = childSnapshot.val(); 
    if(childKey != "purpose") { 
      firebase_message_id = childKey;
       message_data = childData;
        //Start code
        console.log(firebase_message_id) ;
        console.log(message_data);
        names=message_data['name'];
        message= message_data['message'];
        like= message_data['like'];
        names_with_tag="<h4>"+ names +"<img class='user_tick' src='tick.png'></h4>";
        message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
        like_button = "<button class='btn btn-warning' id="+ firebase_message_id +"value="+ like + "onclick='updateLike(this.id)'>";
        span_with_tag = "<span class= 'glyphon glyphon-thums-up'>Like: "+ like +"</span></button><hr>";

        row= names_with_tag + message_with_tag + like_button + span_with_tag;
        document.getElementById("output").innerHTML += row;

        //End code 
      }
     });
     });
     }
      getData()
  function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function updateLike(message_id){
  console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;

    firebase.database().ref(roon_name).child(message_id).update({
      like : update_likes
    });
}
function updateLike(message_id){
  console.log("clicked on like button - " + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    update_likes = Number(likes) + 1;

    firebase.database().ref(roon_name).child(message_id).update({
      like : update_likes
    });
}