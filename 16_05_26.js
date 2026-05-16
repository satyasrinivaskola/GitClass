console.log("Hello Dev 16_05_26");

let para=document.getElementById("para");

let count=0;
let maximum;
let uniqueId;
let isrunning=false;
let maximum_update;
 function start_f(){
 let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
//console.log(typeof(num1))

 if(parseInt(num1)>parseInt(num2)){
 maximum=num1
 }
 else{
  maximum=num2
 }
 function decrement(){
 if(isrunning===true){
 maximum=maximum_update;
 isrunning = false;
 }
 maximum--
 console.log(maximum)
  para.innerHTML="maximum: "+maximum;

 if(maximum===0){
 clearInterval(uniqueId);
isrunning=false;
  para.classList.add("ttt");
  console.log(para);
 para.innerHTML="Timer end";
}
   
 }

 
 uniqueId=setInterval(decrement,1000)
 }
   
 

 function stop(){
maximum_update=maximum;
isrunning=true
 clearInterval(uniqueId)}
 