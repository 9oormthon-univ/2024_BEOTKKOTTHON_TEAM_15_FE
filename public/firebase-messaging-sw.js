importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCx0GFCssAQcT8OxA51k1ACmSkFLaqIFAY",
  projectId: "goorm-notification",
  messagingSenderId: "1029982305361",
  appId: "1:1029982305361:web:6ad251e9e5fda0d5ca0c70",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const messaging = firebase.messaging();
