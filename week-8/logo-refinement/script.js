let m = document.getElementById("m");
let a = document.getElementById("a");
let l = document.getElementById("l");
let b = document.getElementById("b");
let a2 = document.getElementById("a2");
let lines = document.getElementById("lines");
let button0 = document.getElementById("button0");
let button = document.getElementById("button");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");
let button4 = document.getElementById("button4");
let r = document.querySelector(':root');


let grid = document.getElementById("grid");

let div = "<div></div>";

grid.innerHTML = div.repeat(100);

let squares = document.querySelectorAll("#grid div");



// min: 7, increments 15, max 82; ; 

console.log(Math.floor(Math.random() * 10) * 19 + 9);

// let squarem = squares[Math.floor(Math.random() * 3) * 2];

// let squarea = squares[Math.floor(Math.random() * 3) * 2 + 2];

// let squarel = squares[Math.floor(Math.random() * 3) * 2 + 4];

// let squareb = squares[Math.floor(Math.random() * 3) * 2 + 6];

// let squarea2 = squares[Math.floor(Math.random() * 3) * 2 + 8];

let square = squares[Math.floor(Math.random() * squares.length)];




let linemh = squares[18];
let linemv = squares[3];

let posM = Math.floor(Math.random() * 10) * 10;



let posA = [posM + 20, posM + 2, posM - 20];

let randomA = posA[Math.floor(Math.random() * posA.length)];

// if(posM < 20){
//     randomA = posA[Math.floor(Math.random() * 2)];   
//     }
// else if (posM > 70) {
//     randomA = posA[Math.floor(Math.random() * 2 + 1)];    
// }


while ((randomA < 0) || (randomA > 100))
{randomA = posA[Math.floor(Math.random() * posA.length)];};


let posL = [randomA + 2];

let randomL = posL[Math.floor(Math.random() * posL.length)];

while((randomL == posM) || (randomL < 0) || (randomL > 100)) {
    randomL = posL[Math.floor(Math.random() * posL.length)];
    
    };


// if(randomL == posM && randomA < 20){
//     randomL = posL[1];

// }
// else if (randomL == posM && randomA > 80){
//     randomL = posL[1];

// };

// while(randomL == posM) {
//     randomL = posL[Math.floor(Math.random() * posL.length)];
//     };

//     while(randomL < 0 || randomL > 100) {
//         randomL = posL[Math.floor(Math.random() * posL.length)];
//         };

// while(randomL < 0 || randomL > 100) {
//     randomL = posL[Math.floor(Math.random() * posL.length)];
//     };

// if(randomA < 20){
//     randomL = posL[Math.floor(Math.random() * 2)];   
//     }
// else if (randomA > 70) {
//     randomL = posL[Math.floor(Math.random() * 2 + 1)];    
// }

// if(randomA <= 12 && posM >= 0) {
//     randomL = posL[1]; 
// }
// else if(randomA > 12 && randomA < 22 && posM < 68) {
//     randomL = posL[Math.floor(Math.random() * 2)];   
//     }
// else if(randomA < 22 && posM >= 68) {
//     randomL = posL[Math.floor(Math.random() * 2)];   
//     }
// else if(randomA >= 22 && posM > 68) {
//     randomL = posL[Math.floor(Math.random() * 2 + 1)];
// }
// else if(randomA >= 22 && randomA < 70 && posM < 68) {
//     randomL = posL[Math.floor(Math.random() * 2)];
// }
// else if(randomA >= 70 && posM <= 68) {
//     randomL = posL[1];   };


let posB = [randomL + 20, randomL + 2, randomL - 20];


let randomB = posB[Math.floor(Math.random() * posB.length)];

// while((randomB == randomA) || (randomB < 0) || (randomB > 100)) {
//     randomB = posB[Math.floor(Math.random() * posB.length)];
    
//     };

// while(randomB === randomA) {
//     randomB = posB[Math.floor(Math.random() * posB.length)];
    
//     };

//     while(randomB < 0 || randomB > 100) {
//         randomB = posB[Math.floor(Math.random() * posB.length)];
//         };

// if(randomL < 20){
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if (randomL > 70) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];    
// }

// if(randomL <= 12 && randomA >= 0) {
//     randomB = posB[1]; 
// }
// else if(randomL > 12 && randomL < 24 && randomA < 70) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL < 24 && randomA >= 70) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL >= 24 && randomA > 70) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];
// }
// else if(randomL >= 24 && randomL < 42 && randomA < 70) {
//     randomB = posB[Math.floor(Math.random() * 2)];
// }
// else if(randomL >= 42 && randomA <= 70) {
//     randomB = posB[1];   };


// if(randomL < 68){
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if (randomL > 54) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];    
// };


let posA2 = [randomB + 20, randomB + 2, randomB - 20];
let randomA2 = posA2[Math.floor(Math.random() * posA2.length)];

// while((randomA2 == randomL) || (randomA2 < 0) || (randomA2 > 100)) {
//     randomA2 = posA2[Math.floor(Math.random() * posA2.length)];
    
//     };

// if(randomB <= 14 && randomL >= 2) {
//     randomA2 = posA2[1]; 
// }
// else if(randomB > 12 && randomB < 22 && randomL < 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2)];   
//     }
// else if(randomB < 22 && randomL > 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2)];   
//     }
// else if(randomB >= 22 && randomL > 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2 + 1)];
// }

// else if(randomB >= 22 && randomB <= 42 && randomL < 70) {
//     randomA2 = posA2[Math.floor(Math.random() * 2)];
// }
// else if(randomB > 42 && randomL <= 70) {
//     randomA2 = posA2[1]; };



// let aPosition = [aVert, aHor];






// else if(randomA > 52) {
//     randomL = posL[Math.floor(Math.random() * 2 + 1)];    
// }



let squarem = squares[posM];
let squarea = squares[randomA];
let squarel = squares[randomL];
let squareb = squares[randomB];
let squarea2 = squares[randomA2];

console.log("posM " + posM);


console.log("randomA " + randomA);


console.log("randomL " + randomL);

console.log("randomB " + randomB);

console.log("randomA2 " + randomA2);



squarem.innerHTML = "M";
squarea.innerHTML = "A";
squarel.innerHTML = "L";
squareb.innerHTML = "B";
squarea2.innerHTML = "A";


// linemh.classList.add("line");
// linemv.classList.add("line", "rotate");



let lineA = squares[posA[0] - 10];
let lineL = squares[posL[0] - 10];
let lineB = squares[posB[0] - 10];
let lineA2 = squares[posA2[0] - 10];





if(squarea===squares[posA[1]]){
     lineA = squares[posA[1] - 1];
lineA.classList.add("line", "rotate");
squarem.style.marginLeft = "-5px";
squarem.style.marginRight = "5px";

}

else if(squarea===squares[posA[2]]){
    lineA = squares[posA[2] + 10];
    lineA.classList.add("line");

    }
else {
    lineA.classList.add("line");
}

if(squarel===squares[posL[1]]){
    lineL = squares[posL[1] - 1];
lineL.classList.add("line", "rotate");


}

else if(squarel===squares[posL[2]]){
   lineL = squares[posL[2] + 10];
   lineL.classList.add("line");
   squarel.style.marginLeft = "8px";
squarel.style.marginRight = "-8px";

   }
else {
   lineL.classList.add("line");
   squarel.style.marginLeft = "8px";
squarel.style.marginRight = "-8px";
}



if(squareb===squares[posB[1]]){
    lineB = squares[posB[1] - 1];
lineB.classList.add("line", "rotate");


}

else if(squareb===squares[posB[2]]){
   lineB = squares[posB[2] + 10];
   lineB.classList.add("line");
   squarel.style.marginLeft = "8px";
   squarel.style.marginRight = "-8px";
   
   }
else {
   lineB.classList.add("line");
   squarel.style.marginLeft = "8px";
   squarel.style.marginRight = "-8px";
   
};

if(squarea2===squares[posA2[1]]){
    lineA2 = squares[posA2[1] - 1];
lineA2.classList.add("line", "rotate");

}
else if(squarea2===squares[posA2[2]]){
   lineA2 = squares[posA2[2] + 10];
   lineA2.classList.add("line");
   }
else {
   lineA2.classList.add("line");};

let palette = ["#C93635", "#EEBE46", "#036848", "#2B3C7E", "#6CA8D9"];


// button0.onclick = function(){
//     randomB = posB[Math.floor(Math.random() * posB.length)];

// if(randomL <= 18 && randomA >= 2) {
//     randomB = posB[1]; 
// }
// else if(randomL > 18 && randomL < 36 && randomA < 52) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL < 36 && randomA >= 52) {
//     randomB = posB[Math.floor(Math.random() * 2)];   
//     }
// else if(randomL >= 36 && randomA > 52) {
//     randomB = posB[Math.floor(Math.random() * 2 + 1)];
// }
// else if(randomL >= 36 && randomL < 54 && randomA < 52) {
//     randomB = posB[Math.floor(Math.random() * 2)];
// }
// else if(randomL >= 54 && randomA <= 52) {
//     randomB = posB[1];   };

// squareb = squares[randomB];


// squareb.innerHTML = "B";


// };








// setInterval(function(){
//     let squarem = squares[Math.floor(Math.random() * 6) * 15 + 7];

// let squarea = squares[Math.floor(Math.random() * 6) * 15 + 9];

// let squarel = squares[Math.floor(Math.random() * 6) * 15 + 11];

// let squareb = squares[Math.floor(Math.random() * 6) * 15 + 13];

// let squarea2 = squares[Math.floor(Math.random() * 6) * 15 + 15];


//     squarem.innerHTML = "M";
//     squarea.innerHTML = "A";
//     squarel.innerHTML = "L";
//     squareb.innerHTML = "B";
//     squarea2.innerHTML = "A";

// }, 2000);







// m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// lines.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";



// while (lines.style.left === m.style.left) {
//     m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a.style.left) {
//     a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === l.style.left) {
//     l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === b.style.left) {
//     b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a2.style.left) {
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



// while (lines.style.left === m.style.left) {
//     m.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a.style.left) {
//     a.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === l.style.left) {
//     l.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === b.style.left) {
//     b.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
    
//     while (lines.style.left === a2.style.left) {
//     a2.style.left = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
//     }
// }, 2000);


// // button.onclick = multiColors;

// function multi () {
    
//     timeValue = setInterval(function(){
// m.style.color = palette[Math.floor(Math.random() * palette.length)];
//     a.style.color = palette[Math.floor(Math.random() * palette.length)];
//     l.style.color = palette[Math.floor(Math.random() * palette.length)];
//     b.style.color = palette[Math.floor(Math.random() * palette.length)];
//     a2.style.color = palette[Math.floor(Math.random() * palette.length)];
    
//     lines.style.color = palette[Math.floor(Math.random() * palette.length)];}, 2000);
// }

// function rando () {
//     clearTimeout(timeValue);
//     timeRando = setInterval(function(){
// let randomColor = palette[Math.floor(Math.random() * palette.length)];

//     m.style.color = randomColor;
//     a.style.color = randomColor;
//     l.style.color = randomColor;
//     b.style.color = randomColor;
//     a2.style.color = randomColor;
//     lines.style.color = randomColor;}, 2000);



// }

// function red () {
//     clearTimeout(timeValue);
//     clearTimeout(timeRando);
// m.style.color = null;
// a.style.color = null;
// l.style.color = null;
// b.style.color = null;
// a2.style.color = null;
// lines.style.color = null;
  
// }

// function black () {
//     clearTimeout(timeValue);
//     clearTimeout(timeRando);

//     m.style.color = "black";
//     a.style.color = "black";
//     l.style.color = "black";
//     b.style.color = "black";
//     a2.style.color = "black";
//     lines.style.color = "black";

// }

// let randomColor = palette[Math.floor(Math.random() * palette.length)];



// button.addEventListener("click", multi);

// button2.addEventListener("click", red);

// button3.addEventListener("click", black);

// button4.addEventListener("click", rando);






   


// // m.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // a.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // l.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // b.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";
// // a2.style.top = Math.floor(Math.random() * (100 / 20)) * 20 + "%";


