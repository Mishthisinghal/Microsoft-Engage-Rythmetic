const video = document.getElementById('video')
let click_button = document.querySelector("#click-photo");
let canvas = document.querySelector("#canvas");
let password = document.querySelector("#password");
let proceed=document.querySelector('.btn');
let dbname=document.getElementById('dbname').innerText;
let imgurl=document.getElementById('dbimg').innerText;
let progress=document.getElementById('progress');

// const mymodule=require('./analyze');

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
   	await canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
    console.log("image printed")
    let image = convertCanvasToImage();
    detectimage(image)
    password.value="abc";
    progress.innerHTML="Processing....";
    
});

function convertCanvasToImage() {
    let canvas = document.getElementById("canvas");
    let size = document.querySelector("#image");
    
    let image = new Image();
    image.src = canvas.toDataURL();
    image.width=240;
    image.height=170;
    return image;
  }
 


async function detectimage(image){
    const container=document.getElementById('image')
    // container.style.position=
    // document.body.append(container)
    const LabeledFaceDescriptors=await loadLabeledImages()
    const faceMatcher=new faceapi.FaceMatcher(LabeledFaceDescriptors,0.6)
    
    container.append(image)
    const canvas = faceapi.createCanvas(video);
    
    container.append(canvas);
    const displaySize={ width: image.width, height:  image.height};
    
    faceapi.matchDimensions(canvas, displaySize);
    
    const detections=await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();
    if(detections.length===0){
      console.log("zero");
      password.value="zero"
    }
    else if(detections.length>1){
      console.log("many");
      password.value="many"
    }
    else{

    
    console.log(detections.length);
    console.log(displaySize);

    // console.log(mymodule.name);
    const resizedDetections=faceapi.resizeResults(detections,displaySize);
    const results=resizedDetections.map(d=>faceMatcher.findBestMatch(d.descriptor))
    results.forEach((result,i)=>{
        const box=resizedDetections[i].detection.box
        const drawBox=new faceapi.draw.DrawBox(box,{label:result.toString()})
        drawBox.draw(canvas)
        password.value=result.toString().substr(0,7);
        progress.innerHTML="Done!"
        document.getElementById('loginbtn').removeAttribute('disabled');
        console.log(password.value);
    });
    
    
  }

}

function loadLabeledImages(){
  const labels=[dbname]
  return Promise.all(
    labels.map(async label =>{
      const descriptions = []
      const img = await faceapi.fetchImage(imgurl);
      const detections=await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
      descriptions.push(detections.descriptor)

      return new faceapi.LabeledFaceDescriptors(label,descriptions)
    })
  )

}
