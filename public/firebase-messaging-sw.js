// public/firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "AIzaSyC-IpRZ3nM4Z4agW30rXMs_G-CfTU4fwzM",
  authDomain: "moveit-bf76d.firebaseapp.com",
  projectId: "moveit-bf76d",
  storageBucket: "moveit-bf76d.appspot.com",
  messagingSenderId: "523048895951",
  appId: "1:523048895951:web:f6f32218bb3db8aaf23eba",
  measurementId: "G-SBFEWZ5PTF"
});

firebase.messaging();

//background notifications will be received here
firebase.messaging().setBackgroundMessageHandler(payload => {
  const { title, body } = JSON.parse(payload.data.notification);
  var options = {
    body,
  };
  registration.showNotification(title, options);
});
