if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js');
firebase.initializeApp({
  "apiKey": "AIzaSyD8fbrnlL4Jmaz5qXleVNhvjRbNbhhh5mI",
  "authDomain": "beyond-condemnation.firebaseapp.com",
  "databaseURL": "https://beyond-condemnation.firebaseio.com",
  "messagingSenderId": "156756884830",
  "projectId": "beyond-condemnation",
  "storageBucket": "beyond-condemnation.appspot.com"
});