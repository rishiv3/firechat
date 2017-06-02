if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyCietdVuYkyDkTg2LKaManozoga7s2oJ-Y",
  "databaseURL": "https://chatapp-8c48b.firebaseio.com",
  "storageBucket": "chatapp-8c48b.appspot.com",
  "authDomain": "chatapp-8c48b.firebaseapp.com",
  "messagingSenderId": "930516833636",
  "projectId": "chatapp-8c48b"
});
