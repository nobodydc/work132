pic = "";
status = "";

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objdetector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects";
}

function modelLoaded(){
    console.log(" Model is loaded ");
    status = true;
    objdetector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.log(error);
    }
    console.log(results)
}

function preload(){
pic = loadImage('Dream_Team.png');
}


function draw(){
    image(img,0,0,640,420);
    fill('#fc0303');
    text("Sapnap",120,30);
    noFill();
    stroke('#fc0303');
    rect(102,13,400,300);
    
    fill('#fcd703');
    text("GeorgeNotFound",236,43);
    noFill();
    stroke('#fcd703');
    rect(230,28,400,300);
}
