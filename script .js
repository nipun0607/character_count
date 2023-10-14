let input1=document.querySelector("#text_writing");
let increase_count=document.querySelector("#count_increase");
let decrease_count=document.querySelector("#count_decrease");
input1.addEventListener("input",(e)=>{
   let result=e.target.value.length;
//    console.log(result);

    increase_count.innerText=result;
    decrease_count.innerText=70-result;
    
    
});