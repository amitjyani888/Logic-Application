var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){

    
    var synth = window.speechSynthesis;
    Webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);


}
setTimeout(function(){
    img_id = "selfie1";
    take_snapshot(); 
    speak_data = "taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(UtterThis);

},5000);

setTimeout(function(){
    img_id = "selfie2";
    take_snapshot(); 
    speak_data = "taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(UtterThis);

},10000);

function take_snapshot()
{

    console.log(img_id);
    webkitURL.snap(function(data_uri)
    {
if(img_id == "selfie1")
{
    Document.getElementById("result1").innerHTML = '<img id="selfie1" src="'+data_uri+'"/>';
}
if(img_id == "selfie2")
{
    Document.getElementById("result2").innerHTML = '<img id="selfie2" src="'+data_uri+'"/>';
}
if(img_id == "selfie3")
{
    Document.getElementById("result3").innerHTML = '<img id="selfie3" src="'+data_uri+'"/>';
}
    });


}


    

