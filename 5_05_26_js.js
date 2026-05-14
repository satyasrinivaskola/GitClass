console.log("Hello COnsole")
const arr=[1,2,3,4]
arr.shift()
console.log(arr)
console.log(arr.filter((list)=>list<=3))

let object={name:"satya",Num:"333"}
object.city="kkd";
object.name="kola";
delete object.name;
console.log(Object.entries(object))

function sumbit_data(){
let username=document.getElementById("username").value;
let password=document.getElementById("password").value;
console.log(username)
console.log(password)
let success_msg=document.getElementById("success_msg");
console.log(success_msg)
let header_con=document.getElementById("header_con");
if(password!=="777"){
document.getElementById("err_msg").innerHTML="Please enter valid name"
}
if(username!==""){
success_msg.innerHTML="You Logged succefully";
header_con.style.backgroundColor="green";
success_msg.style.color="green";
}


}
