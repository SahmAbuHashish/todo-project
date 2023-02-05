let userName = prompt("please enter your name");
let userGender = prompt("please enter your gender : male or female");
let userAge = prompt("please enter your age");
if (userAge <= 0) {
    alert("your age must be greater  than zero");
}
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
