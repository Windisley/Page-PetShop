const arrowLeft = document.querySelector(".arrow-left")
const arrowRight = document.querySelector(".arrow-right")
const carrossel = document.querySelector(".carrossel")


let count = 1;

arrowLeft.addEventListener("click", ()=>{
    if(count > 1){
        count--
        carrossel.style.transform = `translateX(${-80 * count}%)`;
        console.log(count)
    }

    
})


arrowRight.addEventListener("click", ()=>{
    if(count < 3){
        count++
        carrossel.style.transform = `translateX(${-80 * count}%)`;
    }

    console.log(count)

})
