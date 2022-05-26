const video = document.getElementById('video')
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvasreg");
let mood=document.getElementById('mood');


Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
  faceapi.nets.faceExpressionNet.loadFromUri('../models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('models')
]).then(startVideo)

async function startVideo(){
  navigator.getUserMedia(
    { video: {} },
     stream => video.srcObject = stream,
    err => console.error(err)
  )
}
startVideo();
click_button.addEventListener('click',async function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    mood.value="Processing....";

  let input=document.getElementById('canvasreg');
 const detections = await faceapi.detectAllFaces(input)
 if(detections.length===0){
     mood.value="No face detected. Please Try Again.";
 }
 else if(detections.length===1){
    const faces = await faceapi.detectSingleFace(input).withFaceExpressions();
    const val_max=Math.max(faces.expressions.happy,faces.expressions.sad,faces.expressions.angry,faces.expressions.surprised);
    if(val_max===faces.expressions.happy){
        mood.value="Happy";
        document.getElementById('apply').removeAttribute('disabled');
    }
    else if(val_max===faces.expressions.sad){
        mood.value="Sad";
        document.getElementById('apply').removeAttribute('disabled');
    }
    else if(val_max===faces.expressions.angry){
        mood.value="Angry";
        document.getElementById('apply').removeAttribute('disabled');
    }
    else if(val_max===faces.expressions.surprised){
        mood.value="Suprised";
        document.getElementById('apply').removeAttribute('disabled');
    }
    
 }else{
     mood.value="Multiple Faces Detected.Please Try Again.";
 }
});