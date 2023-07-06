// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getDatabase,
    ref ,
onChildAdded,
push,
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
    var reference = ref(database , `questions/`)
    onChildAdded(reference , function(data){
        questions.push(data.val())
        renderQuestion();
        
    })
    
    var questions = [ ]

var question = document.getElementById("question");
var option = document.getElementById("option")
var correctAnswer

   


var indexVal = 0; 
function renderQuestion(){
    var que = questions[indexVal]
    question.innerHTML = que.question
    currentQuestion.innerHTML = indexVal + 1;
    totalQuestion.innerHTML = questions.length
    
    option.innerHTML = ""
    for(var i =0; i<que.options.length; i++){
        correctAnswer = que.correctAnswer
        option.innerHTML += `<button class="btn" id = "btn" onclick="checkAns('${que.correctAnswer}', '${que.options[i]}')">${que.options[i]}</button>`
    }
 
};
var quiz = document.getElementById('quiz')
var marksdiv = document.getElementById('marksdiv')
var btn = document.getElementById("btn")
//   renderQuestion();
  var btn = document.getElementById("btn")

  var marks = 0;
  var main = document.getElementById("main")
  var markshtml = document.getElementById("marks") ;
 window.checkAns =  function (a,b){
     if(indexVal + 1 == questions.length){
        main.style.display ="none"
        quiz.style.display ="none"
        marksdiv.style.display = "inline-block"
 }
      if(a == b){
          markshtml.innerHTML = ++marks
          ++indexVal
          renderQuestion() 
        }
        else{
            ++indexVal
            renderQuestion() 
            
        }
        
  }