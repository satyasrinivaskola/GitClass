console.log("22-05-26 hh");


function test(n){switch(n){
case "sat":
return "Mon";
break;
case 2:
return "Tue";
break;
case 3:
return "Wed"
case 4:
return "Thur"
case 5:
return "Fri"
case 6:
return "Sat"
case 7:
return "sun"
default:
return "Not Found"
}}

console.log(test("sat"))

let parent_id=document.getElementById("parent_id");
let child_id=document.getElementById("child_id");
function parent(){
console.log("parent_id")}
function child_e(event){
console.log("child_id")
event.stopPropagation()}
parent_id.onclick=parent;
child_id.onclick=child_e;

//child--parent 
console.log(outer()+"closure")
console.log(skill);
var skill;
skill=9;
let x;
x=10;


//fully hosited --global 
//let 

//
//closures

function outer(){
let count=7
function inner(){
let count=6;
count++
return count
}
return inner()
}
console.log(outer())

const obj={name:"ss",conatct:45678,id:"456"}
const{name,id,conatct}=obj
console.log(obj.id)//
console.log(id);
const arr=[1,7,8,9]
//const [x,y,u]=arr
//console.log(x)
const dat=new Array(1,4,5,6)//temoprial 
const dat=[1,4,5,6] //ES6
console.log(dat)