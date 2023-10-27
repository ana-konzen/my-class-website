let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
let symbol1 = document.getElementById("symbol");
let symbol2 = document.getElementById("symbol2");
let symbol3 = document.getElementById("symbol3");
let symbol4 = document.getElementById("symbol4");
let symbol5 = document.getElementById("symbol5");
let symbol6 = document.getElementById("symbol6");

let button = document.getElementById("button");
let button2 = document.getElementById("button2");




const palette = ["#C93635", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9", "black"];

const symbols = ["(", "!", "/", "|", ")", "]", "[", "{", "}"];

symbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol1.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol2.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol3.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol4.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol5.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol6.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));

setInterval(function(){
symbol.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol1.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol2.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol3.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol4.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol5.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
symbol6.innerHTML = symbols[Math.floor(Math.random() * symbols.length)].repeat(Math.floor(Math.random() * 5));
}, 1000);

const randomColor = palette[Math.floor(Math.random() * palette.length)];

function rando () {
const randomColor = palette[Math.floor(Math.random() * palette.length)];


    m.style.color = randomColor;
    a.style.color = randomColor;
    l.style.color = randomColor;
    b.style.color = randomColor;
    a2.style.color = randomColor;
    symbol1.style.color = randomColor;
    symbol2.style.color = randomColor;
    symbol3.style.color = randomColor;
    symbol4.style.color = randomColor;
    symbol5.style.color = randomColor;
    symbol6.style.color = randomColor;

}

button.addEventListener("click", rando);




  

// button.onclick = multiColors;



   


// m.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";


