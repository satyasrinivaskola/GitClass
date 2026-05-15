console.log("Schedulers")
let count=0;
let button_id=document.getElementById("button-id");
//button_id.addEventListener("click",increment) //addeventlistener
//onevent listener
button_id.onclick=increment
function increment(){
console.log(count)
const uniqueId=setInterval(function click(){
count=count+5
console.log(count)
if(count===35){
 clearInterval(uniqueId);}

},1000)



}