var bgColor = document.querySelector(".colorbody");
var color2 = document.querySelector(".input1");
var color1 = document.querySelector(".input2");
var txt = document.querySelector(".setColor");


function colorChange() {
    bgColor.style.background = "linear-gradient(to left, "+ color1.value +","+ color2.value +")"

    txt.textContent = bgcolor.style.background;
};


color1.addEventListener("input", colorChange);
color2.addEventListener("input", colorChange);

