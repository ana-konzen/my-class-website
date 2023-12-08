// let header = document.getElementById("main-header");

let exclist = document.getElementById("exclist");
let exercise = document.getElementById("exercises");
let project = document.getElementById("projects");
let circle = document.getElementById("circle");


let prolist = document.getElementById("prolist");


let y = 0;
let x=0;

// function setup() {
//     let cnv = createCanvas(windowWidth, windowHeight);
//     cursor(CROSS);

    exercise.addEventListener("click", openExc);
    project.addEventListener("click", openPro);
    circle.style.left = e.clientX + 'px'; 
    circle.style.top = e.clientY + 'px';


// }






function openExc() {
    exclist.classList.toggle("appear");

    }

    function openPro() {
        prolist.classList.toggle("appear");
    
        }
