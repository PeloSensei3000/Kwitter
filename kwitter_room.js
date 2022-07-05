var firebaseConfig = {
      apiKey: "AIzaSyDHTKz6scuhpUsEzedkuI6ChxyoJBxT_JY",
      authDomain: "kwitter-85e2f.firebaseapp.com",
      databaseURL: "https://kwitter-85e2f-default-rtdb.firebaseio.com",
      projectId: "kwitter-85e2f",
      storageBucket: "kwitter-85e2f.appspot.com",
      messagingSenderId: "359334644484",
      appId: "1:359334644484:web:cfaeaf6f39aa3112229e51"
    };
//AÑADE TUS ENLACES DE FIREBASE
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Bienvenido/a "+user_name;
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose:"Agregar Nueva Sala"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código
      console.log("Rooms Names "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //Final del código
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}