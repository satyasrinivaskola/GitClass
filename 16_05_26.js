console.log("Hello Dev 16_05_26");

let para=document.getElementById("para");

let count=0;
let maximum;
let uniqueId;
let isrunning=false;
let maximum_update;
let arr=[]
let arr2
let keyevent=document.getElementById("keyevent");
keyevent.addEventListener("keydown",(()=>{if(event.key!=="Enter"){console.log("keyevent")}
}))
 function start_f(){

 let num1=document.getElementById("num1").value;
let num2=document.getElementById("num2").value;
//console.log(typeof(num1))
arr.push(num1)


//console.log(num1,num2)
//console.log(arr)
//console.log(arr2)
}
//console.log(arr2)
console.log("Hello")
localStorage.setItem("name","Hello3");

localStorage.getItem("name");
para.innerHTML=localStorage.getItem("name");
function saveTask(){

let task = document.getElementById("taskInput").value;

localStorage.setItem("taskName", task);

showTask();

}

function showTask(){

let storedTask = localStorage.getItem("taskName");

document.getElementById("displayTask").textContent = storedTask;

}

showTask();

/*
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

 */