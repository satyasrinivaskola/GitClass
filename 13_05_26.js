

let user_list=document.getElementById("user-list");
function submit(){
let input_data=document.getElementById("input_data").value;
let input_data1=document.getElementById("input_data1").value;
console.log(input_data);
console.log(input_data1);


console.log(input_data.length)
if (
   input_data.indexOf("@gmail.com") >1 && input_data.length >= 8 
    
) {
let list_item=document.createElement("li")
   list_item.textContent = input_data;
    user_list.appendChild(list_item)
}

}




console.log(document.getElementById("sub_div"))
/*
let data=`WELCOME dev dev

Pitapuram `
console.log(data.substring(3,5))
let update_d=data.replace(/dev/g,"Developer");
console.log(update_d)

let empty=""
let Premenant=data.trim().toLowerCase()
console.log(Premenant)
console.log("Welcome"+' '+Premenant)
console.log(data.length)
i=data.indexOf("dev")
console.log(i)
console.log(data[6])
*/ 