importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js');

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHvnzUbvIsO9bpumeWV-9b3PdwmOmQJAQ",
  authDomain: "newsletter-d876c.firebaseapp.com",
  projectId: "newsletter-d876c",
  storageBucket: "newsletter-d876c.appspot.com",
  messagingSenderId: "863624721528",
  appId: "1:863624721528:web:4401b268001460f2f2e98d",
  measurementId: "G-VHRRQB5EHF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
 
const messaging = firebase.messaging();
