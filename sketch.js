// let header = document.getElementById("main-header");

let exclist = document.getElementById("exclist");
let exercise = document.getElementById("exercises");
let project = document.getElementById("projects");


let prolist = document.getElementById("prolist");



function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cursor(CROSS);

    exercise.addEventListener("click", openExc);
    project.addEventListener("click", openPro);


}

function draw() {

    fill(114, 47, 55);

    ellipse(mouseX, mouseY, 100, 100);


}

function mousePressed() {
    clear();}

function openExc() {
    exclist.classList.toggle("appear");

    }

    function openPro() {
        prolist.classList.toggle("appear");
    
        }