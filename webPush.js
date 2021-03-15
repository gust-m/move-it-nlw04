import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';

const firebaseCloudMessaging = {
  //checking whether token is available in indexed DB
  tokenInlocalforage: async () => {
    return localforage.getItem('fcm_token');
  },

  //initializing firebase app
  init: async function () {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyC-IpRZ3nM4Z4agW30rXMs_G-CfTU4fwzM",
        authDomain: "moveit-bf76d.firebaseapp.com",
        projectId: "moveit-bf76d",
        storageBucket: "moveit-bf76d.appspot.com",
        messagingSenderId: "523048895951",
        appId: "1:523048895951:web:f6f32218bb3db8aaf23eba",
        measurementId: "G-SBFEWZ5PTF"
      });

      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInlocalforage();

        //if FCM token is already there just return the token
        if (tokenInLocalForage !== null) {
          console.log(tokenInLocalForage)
          return tokenInLocalForage;
        }

        //requesting notification permission from browser
        const status = await Notification.requestPermission();
        if (status && status === 'granted') {
          //getting token from FCM
          const fcm_token = await messaging.getToken();

          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem('fcm_token', fcm_token);
            console.log(fcm_token);
            //return the FCM token after saving it
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  },
};

export { firebaseCloudMessaging };
