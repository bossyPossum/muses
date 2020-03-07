const firebaseConfig = {
  apiKey: "AIzaSyAtYXfdR0q9lw73knRNXbC4-DqTlLZ1gk8",
  authDomain: "project-joel.firebaseapp.com",
  databaseURL: "https://project-joel.firebaseio.com",
  projectId: "project-joel",
  storageBucket: "project-joel.appspot.com",
  messagingSenderId: "861006107438",
  appId: "1:861006107438:web:34a8eae3b2d8a119afe0bf",
  measurementId: "G-G383HT5D03"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
var database = firebase.database();

let ref = function writeComment(){
  firebase.database().ref(Date.now()).set({
    comment: "hello",
    name: "ldksf"
  })
}
ref();
