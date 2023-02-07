'use strict'
let userAnswers = []

let userName = prompt("please enter your name");
if (userName === null){
    userName = "invalid"
}
userAnswers.push(userName)

let userGender = prompt("please enter your gender : male or female");
if (userGender === null){
    userGender = "invalid"
}
userAnswers.push(userGender)

let userAge = prompt("please enter your age");
if (userAge <= 0) {
    alert("your age must be greater  than zero");
}
if (userAge === null){
    userAge = "invalid"
}
userAnswers.push(userAge)

let confirmMassage = confirm("skip the welcoming message");
console.log(confirmMassage);
if (confirmMassage === false) {
    if (userGender === "male") {
        alert("welcome  Mr." + userName);
    } 
    if (userGender === "female") {
        alert("welcome  Ms." + userName);
    }
    if(userGender !== "male" && userGender !== "female") {
        alert("welcome " + userName);
    }
}

let question_1 = prompt("are you a programmer ?");
if (question_1 === null){
    question_1 = "invalid"
}
userAnswers.push(question_1)

let question_2 = prompt("are you a gamer ?");
if (question_2 === null){
    question_2 = "invalid"
}
userAnswers.push(question_2)

let question_3 = prompt("do you like javaScript ?");
if (question_3 === null){
    question_3 = "invalid"
}
userAnswers.push(question_3)

console.log(userAnswers);
console.log(userAnswers.toString()); 
// function pushToArray(){
//     userAnswers.push(userName)
// }