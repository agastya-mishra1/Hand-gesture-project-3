prediction_1="";
prediction_2="";

Webcam.set({
width:350,    
img_format:"png",
png_quality:100,
});

camera= document.getElementById("camera");
Webcam.attach("#camera");

function take_snap(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="capture" src="'+data_uri+'">';
});
}

classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FbBLRDBhy/model.json',modelLoaded);

function modelLoaded(){
console.log("Model is Loaded");
}
function check(){
img=document.getElementById("capture");
classifier.classify(img,gotResult);
}

function gotResult(error,results){
if(error){
   console.error(error); 
}
else{
    console.log(results);
    document.getElementById("result_emotion1").innerHTML=results[0].label;
    document.getElementById("result_emotion2").innerHTML=results[1].label;
    prediction_1=results[0].label;
    prediction_2=results[1].label; 

    if(prediction_1=="happy"){
        document.getElementById("result_emoji1").innerHTML="&#128077;";
    }
    if(prediction_1=="sad"){
        document.getElementById("result_emoji1").innerHTML="&#128078;;";
    }
    if(prediction_1=="amazing"){
        document.getElementById("result_emoji1").innerHTML="&#128076;";
    }
    if(prediction_1=="victory"){
        document.getElementById("result_emoji1").innerHTML="&#9996;";
    }
    if(prediction_1=="rock n roll"){
        document.getElementById("result_emoji1").innerHTML="&#129304;";
    }
    
    if(prediction_2=="happy"){
        document.getElementById("result_emoji2").innerHTML="&#128077;";
    }
    if(prediction_2=="sad"){
        document.getElementById("result_emoji2").innerHTML="&#128078;;";
    }
    if(prediction_2=="amazing"){
        document.getElementById("result_emoji2").innerHTML="&#128076;";
    }
    if(prediction_2=="victory"){
        document.getElementById("result_emoji2").innerHTML="&#9996;";
    }
    if(prediction_2=="rock n roll"){
        document.getElementById("result_emoji2").innerHTML="&#129304;";
    }
   
}
}