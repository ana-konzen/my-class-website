let sound, vocal, instrumental, amp;
let spectrum, bass, lowMid, mid, highMid, treble;
let fft, fft2, peakDetect, w;
let volhistory = [];
let freqhistory = [];
let mute;

let element = document.getElementById("element");


function preload(){

    sound = loadSound('construcao.mp3');
    voice = loadSound('construcao.vocals.mp3')


}


function setup() {
    let cnv = createCanvas(1200, 800);
    
    cnv.mouseClicked(togglePlay);
    
    // vocal.connect();
    fft = new p5.FFT(0.9, 1024);
    fft2 = new p5.FFT(0.3, 1024);
    sound.amp(.5);
    amp = new p5.Amplitude();
}


function draw() {
    background(220);

    let spectrum = fft.analyze();
    noStroke();
    fill(255, 0, 255);
    for (let i = 0; i< spectrum.length; i++){
      let x = map(log(i), 0, log(spectrum.length), 0, width);
      let h = -height + map(spectrum[i], 0, 256, height, height/2);
      rect(x, height, width / spectrum.length, h )
    }
  
    let waveform = fft.waveform();
    noFill();
    beginShape();
    stroke(20);
    for (let i = 0; i < waveform.length; i++){
      let x = map(i, 0, waveform.length, 0, width);
      let y = map( waveform[i], -1, 1, 0, height);
      vertex(x,y);
    }
    endShape();

    averages = fft.logAverages(fft.getOctaveBands(12, 20));
    console.log(averages);
    noFill();
    beginShape();
    stroke(20);
    for (let i = 0; i < averages.length; i++){
      let x = map(i, 0, averages.length, 0, width);
      let y = map(averages[i], 0, 256, height, height/2);
      vertex(x,y);
    }
    endShape();


    volhistory.push(averages[50]);
    speed = 1;
    noFill();
    beginShape();
    stroke(20);
    for (let i = 0; i < volhistory.length; i++){
      let y = map(volhistory[i], 0, 256, 2*height/5, height/5);
      vertex(speed*i,y);
    }
    endShape();

    if(volhistory.length > width/speed){
      volhistory.splice(0, 1);
    }

    fft2.analyze()
    averages = fft2.logAverages(fft2.getOctaveBands(12, 20));
    freqhistory.push(averages[50]);
    speed = 1;
    noFill();
    beginShape();
    stroke(20);
    for (let i = 0; i < freqhistory.length; i++){
      let y = map(freqhistory[i], 0, 256, height/5, 0);
      vertex(speed*i,y);
    }
    endShape();

    if(freqhistory.length > width/speed){
      freqhistory.splice(0, 1);
    }
    
}


function togglePlay() {
    s = sound
    if (s.isPlaying() ){
        s.pause();

    } else {
        s.play();
    }
}
