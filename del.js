// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,
    ref ,
onChildAdded,
remove
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


var main = document.getElementById("main")
var getRef = ref(database,'questions/')
var arry = [];
onChildAdded(getRef,function(data){
    
    arry.push( data.val())
    main.innerHTML = ""
    // console.log(data.val());
    for(var i = 0 ; i < arry.length; i++){
        // console.log(arry[i]);

    main.innerHTML += `<div class="deleteData">
    <div class="question">
    <h3 class='que'>Question: ${arry[i].question}</h3>
    </div>
    <div class="option">
    <apan>options :</span>
<button class='deleterow'> ${arry[i].options} </button>
</div>
<div class="correct">
<P class="correctans">correctAnswer : ${arry[i].correctAnswer}</P>
</div>
<div id="btn">
<button onclick="delrow('${arry[i].id}')" id='btn2' class="btn py-2 px-3 hover">DELETE</button>
</div>
</div>
<hr>`
}
})

window.delrow = function(id){
remove(ref(database , `questions/${id}/`))
window.location.replace("../delQuiz/delQuiz.html")
}

window.back = function(){
    window.location.replace("../../index.html")
  }