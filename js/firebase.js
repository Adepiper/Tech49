var firebaseConfig = {
    apiKey: "AIzaSyDO1ik9KVix8RGAqdTEe46gQVfsmjHJc4Y",
    authDomain: "tech49-6cbb4.firebaseapp.com",
    databaseURL: "https://tech49-6cbb4.firebaseio.com",
    projectId: "tech49-6cbb4",
    storageBucket: "tech49-6cbb4.appspot.com",
    messagingSenderId: "268474402494",
    appId: "1:268474402494:web:2e3a8d0b294cdb0ebec0ef",
    measurementId: "G-P7FTPGC6BQ"
  };
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

const messagesRef = firebase.database().ref('messages');


const messageForm = document.getElementById('messageForm')
messageForm.addEventListener('submit', submitForm);


function submitForm(e){
    e.preventDefault()

    const name = document.getElementById('name').value
    const phone = document.getElementById('phone').value
    const message = document.getElementById('message').value
    sendMessage(name, phone, message);

    const alert = document.getElementById('alert');
    alert.classList.remove('d-none');

   setTimeout(function(){
    alert.classList.add('d-none');
   }, 3000)

   document.getElementById('messageForm').reset();
}

const sendMessage = (name, phone, message)=>{
    var newMessageRef = messagesRef.push();

    newMessageRef.set({
        name: name,
        phone: phone,
        message: message
    })
}




