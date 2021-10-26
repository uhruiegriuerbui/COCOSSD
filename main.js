function setup(){
canvas=createCanvas(380 , 380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
objectIdentifier=ml5.objectDetector('cocossd' , modelLoaded);
document.getElementById("status").innerHTML="Status = Detecting Object";
}

function modelLoaded(){
console.log("Model Is Loaded");
Status=true;

}

function gotResults(error , results){
if(error){
console.error(error);
}
console.log(results);
objects=results;
}

img="";
Status="";
objects= [];

function preload(){
//img=loadImage("dog_cat.jpg");
}

function draw(){
image(video , 0 , 0 , 380 , 380);
if(Status !=""){
r=random(255);
g=random(255);
b=random(255);
objectIdentifier.detect(video , gotResults);
for(i=0;i<objects.length;i++){
document.getElementById("status").innerHTML="Status : Object Detected";
document.getElementById("no_obj").innerHTML="Number of Objects Detected = "+objects.length;
fill(r , g , b);
percent=floor(objects[i].confidence*100);
text(objects[i].label+""+percent+"%" , objects[i].x , objects[i].y);
noFill();
stroke(r , g , b);
rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
}
}
}