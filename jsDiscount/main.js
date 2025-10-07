
const mynumb1=document.querySelector(".input1");
const mybtn1=document.querySelector(".button1");


const mynumb=document.querySelector(".input2");
const mybtn=document.querySelector(".button2");

const message = document.getElementById("message");



let password1 = "";


mybtn1.addEventListener("click",()=>{
    password1=mynumb1.value;console.log(password1);
})


mybtn.addEventListener("click",()=>{
    const vurudi=mynumb.value;console.log(vurudi);
    
    const mypromise=new Promise((resolve,reject)=>{
        
        if(vurudi==password1){
            resolve("yes")
        }
        else{
            reject("no")
        }
    });
    mypromise.then((res)=>{console.log("resolve",res)
    alert("this discount code is true") 
    message.textContent = "this discount code is true";

    })
        .catch((rej) => {
    console.log("reject", rej)
    alert("this discount code is false")
    message.textContent = "this discount code is false";
    });
})









