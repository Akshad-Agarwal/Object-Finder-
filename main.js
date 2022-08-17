status1 = "" ;

function preload() {

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(565,350);
    video = createCapture(VIDEO);
    video.hide();
    video.size(600,500);
}

function draw(){
    image(video, 0, 0, 600, 500);
}

function start() {
    ObjectDetect = ml5.objectDetector("cocossd", modelReady);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function modelReady() {
    console.log("modelLoaded");
    status1 = true;
}