const video = document.getElementById('video')
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");

Promise.all([
    faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
    faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
    faceapi.nets.faceExpressionNet.loadFromUri('../models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('../models')
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
    //  let image_data_url = canvas.toDataURL('image/png');
     let input=document.getElementById('canvas');
     const detectionWithExpressions = await faceapi.detectSingleFace(input).withFaceExpressions();
     console.log(detectionWithExpressions.expressions);
     
});