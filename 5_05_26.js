
function Login(){
console.log("Logedin");
let username=document.getElementById("username").value;
let password=document.getElementById("Password").value;

if(username==="satya"){
console.log("Correct Credential");
let msg=document.getElementById("succees")
msg.innerHTML="correct";
msg.style.fontSize="600px";
}
console.log(username);
console.log(password);

  return false;
}