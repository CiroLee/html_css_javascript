let colors= ["red", "blue", "yellow" ] //red=0, blue=1, yellow=2
let btn = document.getElementById("colorBtn")
let text = document.querySelector(".textColor")
btn.addEventListener("click" ,function(){
let randomColor= getRandomColor();
document.body.style.backgroundColor = colors[randomColor];
text.textContent = colors[randomColor]
document.getElementById("colorBtn").style.transform= "rotateX(360deg)";//a kind of animation to the button element
 

})
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}
