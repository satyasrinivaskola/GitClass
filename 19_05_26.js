/*let Village
let para=document.getElementById("para");
function click_fn(event){
if(event.key==="Backspace"){

console.log("click function through Js onclick");
let input_data=document.getElementById("input_id").value;
console.log(input_data)

//console.log("local_item")

console.log(event)}
}

let click_btn=document.getElementById("click_btn");
click_btn.addEventListener("mouseover",click_fn);
*/
console.log(new Date())
let current_date=new Date()
let updated=current_date.toLocaleDateString();
//console.log(updated.)
let select_data=document.getElementById("select-data").value;
console.log(select_data)
let name=document.getElementById("name");
console.log(updated)
function demo_form(event){
event.preventDefault();
console.log("demo_form")}
let myForm=document.getElementById("myForm");
name.addEventListener("blur",demo_form)

let select_box = document.getElementById("select-data");

select_box.addEventListener("change", function() {

    console.log(select_box.value);

});