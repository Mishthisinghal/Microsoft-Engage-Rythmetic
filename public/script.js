const video = document.getElementById('video')
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvasreg");
let password = document.querySelector("#password");
let imgurl="";

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('../models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('../models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('../models'),
  faceapi.nets.faceExpressionNet.loadFromUri('../models')
]).then(startVideo)

async function startVideo(){
  navigator.getUserMedia(
    { video: {} },
     stream => video.srcObject = stream,
    err => console.error(err)
  )
}
// video.addEventListener('play', () => {
  
//   setInterval(async () => {
//     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions());
//     console.log(detections.length);
//   }, 100)
// })
startVideo();

click_button.addEventListener('click',async function() {
   	canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
     let image_data_url = canvas.toDataURL('image/png');
     
    //  document.getElementById('canvasimg').src=image_data_url;
     let input=document.getElementById('canvasreg');
    //  const detections = await faceapi.detectAllFaces(input);
    const faces = await faceapi.detectAllFaces(input, new faceapi.TinyFaceDetectorOptions());
   	if(faces.length===0){
      password.value="zero";
     }else if(faces.length>1){
      password.value="many";
     }else{
      password.value=image_data_url;
     }
   	// console.log(image_data_url);
     
});

// export default imgurl;