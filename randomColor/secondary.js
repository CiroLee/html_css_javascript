let colors= ["orange", "green", "magenta", "olive", "purple"," violet", "indigo",] 
let btn = document.getElementById("colorBtn")
let text = document.querySelector(".textColor")
btn.addEventListener("click" ,function(){
let randomColor= getRandomColor();
document.body.style.backgroundColor = colors[randomColor];
text.textContent = colors[randomColor]
document.getElementById("colorBtn").style.transform= "rotateX(360deg)";

})
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}