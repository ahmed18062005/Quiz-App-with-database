// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,
    ref ,
set
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYhMU8_tENGAyVa49TfD8ifHZPL9kD4bk",
  authDomain: "quiz-app-wiht-database.firebaseapp.com",
  databaseURL: "https://quiz-app-wiht-database-default-rtdb.firebaseio.com",
  projectId: "quiz-app-wiht-database",
  storageBucket: "quiz-app-wiht-database.appspot.com",
  messagingSenderId: "820071159906",
  appId: "1:820071159906:web:a2d936ee3493c24b5e193b",
  measurementId: "G-TDY033ZD25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();

var password = document.getElementById("password")
function call() {   

    window.location.replace("/index.html")
}
window.setPassword = function () {
    var obj = {
        password: password.value
    }
    var userRef = ref(database, "setPassword/");
    set(userRef,obj)
    setTimeout(function(){
        call()
        },2000)
        password.value = ""
}
