console.log("21-05-26 dev")
for(let i=0;i<4;i++){
console.log(i);
//console.log([i])
}
let j=0;
do{
console.log("Hello")
}
while(j>5){
console.log("while"+j);
j++
}

sum=0;
function add(){
sum=2*2
}
const arr=[4,6,7];//4+6+7
let res=arr.reduce((a,list)=>{
if(list%2===0){
a.push(list)
}
return a
}
//list=4
,[]
)
//2+4=6
//acc+list-->6+6==12
//acc+list-->12+7=19
//arr.reduce(function,intialvalue);
console.log(res)
//array destructring
const d=[4,6,89,89];
[x,y,...r]=d
console.log(r);
const arr2=[..."satya",89,"satya",...d]
console.log(arr2)
//let class_collection=document.getElementsByquerySelector(".h1");
console.log(document.querySelector('#h1'))
//console.log(class_collection[1])

let n="day";
function data_f(day){ switch(day){
case 1:
return "Tue";
break;
case 2:
return "Wed";
break;
case 3:
return "Thus";
break;
}}
console.log(data_f(2))
function onlick_parent(){

console.log("onlick_parent")}
function child_id5(e){
e.stopPropagation()
console.log("child_id5")}

const parent_id=document.getElementById("parent-id");
parent_id.style.color="yellow"
console.log(parent_id)
parent_id.onclick=onlick_parent;
let child_id=document.getElementById("child-id")
child_id.onclick=child_id5;
let input_e=document.getElementById("input_e");
input_e.addEventListener("input",function (){
console.log(input_e.value.length)
if(input_e.value.length>15){
input_e.value=input_e.value.slice(0,15);
        input_e.disabled = true;

}
})

function outer(){
let count=6;
function inner(){
count=7;
count++
return count
}
return inner()
}

console.log(outer())

function host(){
//console.log(x);
console.log(y)
//let x;
var y;
}
host()