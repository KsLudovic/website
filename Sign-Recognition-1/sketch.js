
// Video
let video;
// img


// datas
let classifier;
let label = 'waiting';

// timer
let deltatime = 0;

// Sound related
var volume = 0.2;
var voice = 3;


//
let tmpLabel ='';

//speech
var foo = new p5.Speech();

// STEP 1: Load the model!
function preload() {
 classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YWdZ5E3z5/model.json');
  //make sure that it ends with /model.json
  
}


//you can pass parameters here as well
function setup() {
  createCanvas(600, 600);
  video = createCapture(VIDEO);
  foo.setVolume(volume);
  foo.setVoice(voice);
    
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// STEP 2: classify!
function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  
  background(0);
  //image(video, 0, 0);

  // STEP 4: Draw the label
  textSize(30);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width/2, height-16);
  if(label == 'unknown' && deltatime>1){
    tmpLabel = label;
    deltatime=0;
    
  }
  if(label != 'unknown' && label != tmpLabel && deltatime>1){
  foo.speak(label);
  tmpLabel = label;
    deltatime=0;
   
    
  }
  deltatime+=0.05;
  console.log(deltatime);
// You will likely want other things happening here. 
    
}

// STEP 3: Get the classification!
function gotResults(error, results) {
  label = results[0].label;
  classifyVideo();
  //classify video again


}
