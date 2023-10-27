let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
let lines = document.getElementById("lines");
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");




const palette = ["#C93635", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9"];





m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



while (lines.style.left == m.style.left) {
    m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == a.style.left) {
    a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == l.style.left) {
    l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == b.style.left) {
    b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == a2.style.left) {
    a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }


setInterval(function(){
   
m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



while (lines.style.left == m.style.left) {
    m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == a.style.left) {
    a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == l.style.left) {
    l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == b.style.left) {
    b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
    
    while (lines.style.left == a2.style.left) {
    a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
    }
}, 2000);


// button.onclick = multiColors;

function multi () {
    
    timeValue = setInterval(function(){
m.style.color = palette[Math.floor(Math.random() * palette.length)];
    a.style.color = palette[Math.floor(Math.random() * palette.length)];
    l.style.color = palette[Math.floor(Math.random() * palette.length)];
    b.style.color = palette[Math.floor(Math.random() * palette.length)];
    a2.style.color = palette[Math.floor(Math.random() * palette.length)];
    
    lines.style.color = palette[Math.floor(Math.random() * palette.length)];}, 2000);
}

function rando () {
    clearTimeout(timeValue);
    timeRando = setInterval(function(){
const randomColor = palette[Math.floor(Math.random() * palette.length)];

    m.style.color = randomColor;
    a.style.color = randomColor;
    l.style.color = randomColor;
    b.style.color = randomColor;
    a2.style.color = randomColor;
    lines.style.color = randomColor;}, 2000);



}

function red () {
    clearTimeout(timeValue);
    clearTimeout(timeRando);
m.style.color = null;
a.style.color = null;
l.style.color = null;
b.style.color = null;
a2.style.color = null;
lines.style.color = null;
  
}

function black () {
    clearTimeout(timeValue);
    clearTimeout(timeRando);

    m.style.color = "black";
    a.style.color = "black";
    l.style.color = "black";
    b.style.color = "black";
    a2.style.color = "black";
    lines.style.color = "black";

}

const randomColor = palette[Math.floor(Math.random() * palette.length)];



button.addEventListener("click", multi);

button2.addEventListener("click", red);

button3.addEventListener("click", black);

button4.addEventListener("click", rando);






   


// m.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";


