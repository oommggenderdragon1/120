var css = 'body {animation-name:test; animation-duration:4s; animation-iteration-count:infinite; } @keyframes test{ 0%{color:#ff0000} 20%{color:#00ff00} 40%{color:#ffff00} 60%{color:#0000ff} 80%{color:#00ffff} 100%{color:#ff0000}', head = document.head || document.getElementsByTagName('head')[0], style = document.createElement('style'); style.type = 'text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style);


function StartClassification(){
navigator.mediaDevices.getUserMedia({
    audio:true
});
Classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/bOdrloebI/model.json",modelReady);
}
function modelReady(){
Classifier.classify(gotResults);

}
function gotResults(error,results){
if(error){
console.error(error);

}
else{

    console.log(results);
    random_number_r = Math.floor(Math.random()*255)+1;
    random_number_g = Math.floor(Math.random()*255)+1;
    random_number_b = Math.floor(Math.random()*255)+1;
    document.getElementById("result_label").innerHTML = "I CAN HEAR -- "+results[0].label;
    document.getElementById("result_confidence").innerHTML = "ACCURACY --  "+
    (results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")"
}}









