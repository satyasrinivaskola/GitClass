console.log("hello");
a=67;//intialization without intialization will get undefined
var a;//Declaration a var 
let defaultwidth=200
function Trail(){
let message=document.getElementById("name").value;
console.log(message);
let conatiner=document.getElementById("contaienr");

console.log(document.getElementById("contaienr"));
document.getElementById("contaienr").style.width=defaultwidth+"px";
defaultwidth=defaultwidth-50;
console.log(defaultwidth)
if(message==="satya"){
document.getElementById("name1").innerHTML="<button>Hello</button>";
}


}
function incre(){
defaultwidth=defaultwidth+50;
console.log(defaultwidth)

document.getElementById("contaienr").style.width=defaultwidth+"px";
}