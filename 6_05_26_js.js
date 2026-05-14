let defalut_width=80;
bulb_b=document.getElementById("bulb_c")
function click_s(){
defalut_width=defalut_width+10
bulb_c.style.width=defalut_width+"px";
}
function click_off(){
defalut_width=defalut_width-10
bulb_c.style.width=defalut_width+"px";
}


let arr = [1,1,2,3];

let unique = [...new Set(arr)];