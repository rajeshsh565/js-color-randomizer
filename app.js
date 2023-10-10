const btn = document.querySelector("#btn");
const hexes = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
function randomizer(){
     let hex_code = "#";
     for (var i = 0; i < 6; i++) {
       hex_code = hex_code + hexes[Math.floor(Math.random() * 16)];
     }
     return hex_code;
}
function colorizer(){
     const hex_code = randomizer();
     const color_code_text = document.getElementById("color-code");
     const container = document.querySelector(".container");
     color_code_text.textContent = hex_code;
     color_code_text.style.color = hex_code;
     container.style.backgroundColor = hex_code;
}

btn.addEventListener('click', colorizer);