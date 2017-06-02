// Initialize Firebase
// TODO: Replace with your project's customized code snippet
if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "<API_KEY_>",
  "databaseURL": "https://<PROJECT_ID>.firebaseio.com",
  "storageBucket": "<PROJECT_ID>.appspot.com",
  "authDomain": "<PROJECT_ID>.firebaseapp.com",
  "messagingSenderId": "<SENDER_ID>",
  "projectId": "<PROJECT_ID>"
});
