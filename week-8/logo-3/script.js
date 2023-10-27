let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
let lines = document.getElementById("lines");
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let blob1 = document.getElementById("one");
let blob2 = document.getElementById("two");
let blob3 = document.getElementById("three");








blob1.style.borderRadius = Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% / " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "%";

blob2.style.borderRadius = Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% / " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "%";

blob3.style.borderRadius = Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% / " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "%";

const palette = ["#C93635", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9", "#D1A46D", "#EFDEC6"];

blob1.style.background = palette[Math.floor(Math.random() * palette.length)];

blob2.style.background = palette[Math.floor(Math.random() * palette.length)];

blob3.style.background = palette[Math.floor(Math.random() * palette.length)];

blob1.style.width = Math.random() * 300 + 150 + "px";
blob1.style.height = Math.random() * 300 + 150 + "px";

blob2.style.width = Math.random() * 300 + 150 + "px";
blob2.style.height = Math.random() * 300 + 150 + "px";


blob3.style.width = Math.random() * 300 + 150 + "px";
blob3.style.height = Math.random() * 300 + 150 + "px";

blob1.style.left = Math.random() * 60  + "%";
blob1.style.top = Math.random() * 60  + "%";

blob2.style.left = Math.random() * 60  + "%";
blob2.style.top = Math.random() * 60  + "%";

blob3.style.left = Math.random() * 60  + "%";
blob3.style.top = Math.random() * 60 + "%";

setInterval(function(){
    blob1.style.borderRadius = Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% / " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "%";

blob2.style.borderRadius = Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% / " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "%";

blob3.style.borderRadius = Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% / " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "% " + Math.random() * 80 + 20 + "%";

const palette = ["#C93635", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9", "#D1A46D", "#EFDEC6"];

blob1.style.background = palette[Math.floor(Math.random() * palette.length)];

blob2.style.background = palette[Math.floor(Math.random() * palette.length)];

blob3.style.background = palette[Math.floor(Math.random() * palette.length)];

blob1.style.width = Math.random() * 200 + 100 + "px";
blob1.style.height = Math.random() * 300 + 150 + "px";

blob2.style.width = Math.random() * 300 + 150 + "px";
blob2.style.height = Math.random() * 300 + 150 + "px";


blob3.style.width = Math.random() * 300 + 150 + "px";
blob3.style.height = Math.random() * 300 + 150 + "px";

blob1.style.left = Math.random() * 60  + "%";
blob1.style.top = Math.random() * 50  + "%";

blob2.style.left = Math.random() * 60  + "%";
blob2.style.top = Math.random() * 50  + "%";

blob3.style.left = Math.random() * 60  + "%";
blob3.style.top = Math.random() * 50 + "%";
}, 2000);

function black () {
    m.style.color = "black";
    a.style.color = "black";
    l.style.color = "black";
    b.style.color = "black";
    a2.style.color = "black";
    lines.style.color = "black";

}

function white () {
m.style.color = null;
a.style.color = null;
l.style.color = null;
b.style.color = null;
a2.style.color = null;
lines.style.color = null;
  
}


button.addEventListener("click", black);
button2.addEventListener("click", white);




// m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



// while (lines.style.left == m.style.left) {
//     m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == a.style.left) {
//     a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == l.style.left) {
//     l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == b.style.left) {
//     b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == a2.style.left) {
//     a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }


// setInterval(function(){
   
// m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



// while (lines.style.left == m.style.left) {
//     m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == a.style.left) {
//     a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == l.style.left) {
//     l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == b.style.left) {
//     b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left == a2.style.left) {
//     a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
// }, 2000);


// // button.onclick = multiColors;

// function multiColors () {
//     button2.style.display = "block";
// button.style.display = "none";
//     timeValue = setInterval(function(){
// m.style.color = palette[Math.floor(Math.random() * palette.length)];
//     a.style.color = palette[Math.floor(Math.random() * palette.length)];
//     l.style.color = palette[Math.floor(Math.random() * palette.length)];
//     b.style.color = palette[Math.floor(Math.random() * palette.length)];
//     a2.style.color = palette[Math.floor(Math.random() * palette.length)];
    
//     lines.style.color = palette[Math.floor(Math.random() * palette.length)];}, 2000);
// }

// function oneColor () {
//     clearTimeout(timeValue);
// m.style.color = null;
// a.style.color = null;
// l.style.color = null;
// b.style.color = null;
// a2.style.color = null;
// lines.style.color = null;


//     button.style.display = "block";
//     button2.style.display = "none";
    
// }
// button.addEventListener("click", multiColors);

// button2.addEventListener("click", oneColor);




   


// // m.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // a.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // l.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // b.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // a2.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";


