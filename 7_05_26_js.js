let Greet=function (name="Guest",subGreet){
console.log ("Welcome "+name); //Welcome Guest =var

}
function subGreet(){
console.log("How is your day buddy")}

Greet("Bhavani",subGreet())

const data=[1,2,6,8];
(data.find(n=>n<7))
const newData=data.forEach(n=>n*2)

console.log(newData)
console.log(data.splice(1,3,2))

const arr = [10,20,30];

arr.splice(1,2,99,88);

console.log(arr);

function add(a, b) {
    return a + b;
}

console.log(add(2,3));

const add1=(a,b)=>{
 return a + b;
}
console.log(add1(2,3));

