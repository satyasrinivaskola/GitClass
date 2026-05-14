
let b=Math.random();
//console.log(b)
//let b=b*100
//console.log()
//console.log(Math.ceil(b))
//console.log(Math.floor(b))
let Main_div=document.getElementById("Main-div");

    let header_e=document.createElement('h1');

    header_e.textContent="Hello I am Header tag from Js";
   header_e.setAttribute("id","header-js") ;
    console.log(header_e);
    //document.body.appendChild(header_e);
Main_div.appendChild(header_e);
let one_header=document.getElementById("one-header");
function off(){
one_header.classList.add("hello")}
function on(){
one_header.classList.remove("hello")}
//document.body.removeChild(one_header);

let a=b;
if(a>5){
console.log("A is greater num");}
else if(a<5){
console.log("A is lesser num");}
else if(a===5){
console.log("A is rqual to 5");

}
else{
console.log("Default conditional Num")}

const arr=[2,45,66,13]; 
//[2,13,45,66]
console.log(arr.sort((a,b)=>b-a))