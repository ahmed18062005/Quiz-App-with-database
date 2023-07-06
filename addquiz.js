// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,
    ref ,
push,
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


var question = document.getElementById('question');
var option = document.getElementById('option');
var optionsParent = document.getElementById('optionsParent');
var correctAnswerElem = document.getElementById('correctAnswer');
function allEmty(){
  question.value = "";
  option.value = "";
  optionsParent.innerHTML = ""
  correctAnswerElem.innerHTML = ""
}

  var correctAnswer
var options = []

function renderOptions(){
    optionsParent.innerHTML = "";
    for(var i = 0 ; i < options.length ; i++){
        optionsParent.innerHTML += `<li class ="li mt-2 p-2 bg-light fs-5 rounded-2" onclick="setCorrectAnswer('${options[i]}')">${options[i]}</li>`
    }
}

window.addOptions = function(){

options.push(option.value)

renderOptions()
option.value = ""
}

window.setCorrectAnswer = function(a){
correctAnswer = a
correctAnswerElem.innerHTML = correctAnswer

}

window.submitQuestion = function(){
  var  quizIdRef = push(ref(database,'questions')).key
    var obj = {
      question: question.value,
      options: options,
      correctAnswer: correctAnswer,
      id : quizIdRef
    }


    var quizRef = ref(database,`questions/${quizIdRef}/`)
set(quizRef,obj) 
allEmty()
  }

window.back = function(){
  window.location.replace("../../index.html")
}
window.resetp = function(){
  window.location.replace("../setPassword/setPasswordindex.html ")
}
window.delQuiz = function(){
  window.location.replace("../delQuiz/delQuiz.html")
}



