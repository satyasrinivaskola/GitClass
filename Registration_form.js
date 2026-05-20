
let form=document.getElementById("myForm");

let firstName=document.getElementById("firstName");
let lastName=document.getElementById("lastName");
let email=document.getElementById("email");
let password=document.getElementById("password");

let firstNameError=document.getElementById("firstNameError");
let lastNameError=document.getElementById("lastNameError");
let emailError=document.getElementById("emailError");

let submitBtn=document.getElementById("submitBtn");
let resetBtn=document.getElementById("resetBtn");

let charCount=document.getElementById("charCount");

let passwordStrength=document.getElementById("passwordStrength");

let course=document.getElementById("course");

let courseText=document.getElementById("courseText");

let successMessage=document.getElementById("successMessage");

let heading=document.getElementById("heading");

let darkModeBtn=document.getElementById("darkModeBtn");

let timer=document.getElementById("timer");


// FOCUS EVENT

firstName.addEventListener("focus", function(){
firstName.style.borderColor="blue";
});


// BLUR EVENT

firstName.addEventListener("blur", function(){

if(firstName.value===""){
firstNameError.textContent="Required";
}
else{
firstNameError.textContent="";
}

});


// INPUT EVENT

firstName.addEventListener("input", function(){

charCount.textContent="Characters : " + firstName.value.length;

});


// KEYDOWN EVENT

firstName.addEventListener("keydown", function(event){

if(event.key==="Enter"){
console.log("Enter Key Pressed");
}

});


// KEYUP EVENT

firstName.addEventListener("keyup", function(){

console.log("Typing : " + firstName.value);

});


// PASSWORD STRENGTH

password.addEventListener("input", function(){

if(password.value.length<4){
passwordStrength.textContent="Weak Password";
}
else if(password.value.length<8){
passwordStrength.textContent="Medium Password";
}
else{
passwordStrength.textContent="Strong Password";
}

});


// CHANGE EVENT

course.addEventListener("change", function(){

courseText.textContent="Selected Course : " + course.value;

});


// MOUSEOVER EVENT

submitBtn.addEventListener("mouseover", function(){

submitBtn.style.backgroundColor="green";

});


// MOUSEOUT EVENT

submitBtn.addEventListener("mouseout", function(){

submitBtn.style.backgroundColor="blue";

});


// CLICK EVENT

resetBtn.addEventListener("click", function(){

form.reset();

charCount.textContent="";
passwordStrength.textContent="";
courseText.textContent="";
successMessage.textContent="";

});


// DOUBLE CLICK EVENT

heading.addEventListener("dblclick", function(){

heading.style.color="red";

});


// SUBMIT EVENT

form.addEventListener("submit", function(event){

event.preventDefault();

let isValid=true;

if(firstName.value===""){
firstNameError.textContent="Required";
isValid=false;
}
else{
firstNameError.textContent="";
}

if(lastName.value===""){
lastNameError.textContent="Required";
isValid=false;
}
else{
lastNameError.textContent="";
}

if(email.value.includes("@")===false){
emailError.textContent="Invalid Email";
isValid=false;
}
else{
emailError.textContent="";
}

if(isValid===true){
successMessage.textContent="Registration Successful";
}

});


// DARK MODE

darkModeBtn.addEventListener("click", function(){

document.body.classList.toggle("dark-mode");

});


// TIMER

setInterval(function(){

let currentTime=new Date();
console.log(currentTime)
timer.textContent=currentTime.toLocaleTimeString();
console.log(currentTime.getHours())
},1000);