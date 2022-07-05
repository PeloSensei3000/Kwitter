//TUS ANLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyDHTKz6scuhpUsEzedkuI6ChxyoJBxT_JY",
      authDomain: "kwitter-85e2f.firebaseapp.com",
      databaseURL: "https://kwitter-85e2f-default-rtdb.firebaseio.com",
      projectId: "kwitter-85e2f",
      storageBucket: "kwitter-85e2f.appspot.com",
      messagingSenderId: "359334644484",
      appId: "1:359334644484:web:cfaeaf6f39aa3112229e51"
    };
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Inica código
console.log(firebase_message_id);
console.log(message_data);
names=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+names+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"</h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
span_with_tag="<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";           
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML += row;
//Termina código
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name, 
            message: msg,
            like: 0
      });
      document.getElementById("msg").value="";
}
function updateLike(message_id){
      console.log("Botón *Me Gusta* pulsado - " + message_id); 
      button_id = message_id;
       like = document.getElementById(button_id).value; 
      updated_likes = Number(like) + 1; 
      console.log(updated_likes); 
      firebase.database().ref(room_name).child(message_id).update({ like : updated_likes });
}