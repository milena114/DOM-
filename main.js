
document.addEventListener('DOMContentLoaded', function(){
    const box = document.getElementById("color-box");
    console.log(box);
    
    const changeColor = document.getElementById("change-color-btn")
 
    const getRandomColor = () =>{
        const random = (Math.random() * 0xFFFFFF << 0).toString(16);
        // console.log(random);
        box.style.backgroundColor = "#" + random;
    }

    changeColor.addEventListener("click" , getRandomColor)
    
})