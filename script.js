let counter = document.querySelector(".counterValue");
let incrementBtn =document.querySelector(".incrementBtn");
let decrementBtn =document.querySelector(".decrementBtn");
let ResetBtn = document.querySelector(".ResetBtn");
let countBy= document.querySelector(".countBy");


incrementBtn.addEventListener('click' , ()=> {
    const counterValue = parseInt(counter.innerText);
    const countByValue = parseInt(countBy.value);
    const update = counterValue + countByValue;
    counter.innerText = update;
    
})

decrementBtn.addEventListener('click' , ()=> {
    const counterValue = parseInt(counter.innerText);
    const countByValue = parseInt(countBy.value);
    counter.innerText = counterValue - countByValue;
   

})

ResetBtn.addEventListener('click' , ()=> {
    counter.innerText = 0;
    

})

