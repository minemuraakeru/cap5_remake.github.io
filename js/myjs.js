//ここにJavaScriptのコードを書く
window.gloVar = 50;
window.rewriteCounter=0;

//canvasを格納する変数の定義
var canvas;


function setup(){
//size(640, 480);に相当する
canvas = createCanvas(1000, 800);
//ただしこの命令でhtml上にcanvasタグが挿入される．
canvas.parent("P5Canvas");

colorMode(RGB,255,255,255,255);
myImage=loadImage(".jpg")
}

function draw(){
if(mouseIsPressed){
    // fill(255,255,255);
    // fill(0);
    // fill(255);


    noStroke();
    noFill();
//    stroke(255,235,205);
//     fill(255,235,205); 
}
// else if ((keyPressed == true) && ((key == 'a') ||  (key == 'A'))){
//     fill(255);
//     stroke(0);
//   }
else{

// fill(255);



// fill(255,235,205);
stroke(255,235,205);
// stroke(0);
fill(0);



}
ellipse(mouseX, mouseY, 70, 70);
}





image(myImage,0,0);

function mousePressed(){
    if(mouseX> 320){
        // location.href="https://www.google.com/?client=safari";
        document.getElementById("dandan").innerHTML="<P>右</p>";
    
    
    }
    else{
        // location.href="https://www.google.com/?client=safari";
        document.getElementById("dandan").innerHTML="<P>左</P>";
    }
}


function reWriteDiv(){
    if(window.rewriteCounter==0){
    document.getElementById("dandan").innerHTML = "<p><strong>１回目書き換わりました!</strong></p>";
    window.rewriteCounter++;
}
else if(window.rewriteCounter==1){
    document.getElementById("dandan").innerHTML = "<p><strong>２回目書き換わりました!</strong></p>";
    window.rewriteCounter++;
}

else if(window.rewriteCounter==2){
    document.getElementById("dandan").innerHTML = "<p><strong>3回目書き換わりました!</strong></p>";
    window.rewriteCounter=0;
}
}

function onButtonClick(){
alert("こんにちは");



let returnValue = myFunc();
alert(returnValue);
alert(window.gloVar);
window.gloVar=40;
alert(window.gloVar);

let st1="これが１つ目"
let st2="これが２つ目"
alert(st1+st2);
let st3=`グローバル変数は${window.gloVar}です`;
alert(st3);
}

function onButtonClick2(){
alert("こんばんは");
}

function myFunc(){
    let myVariable1 = 10;
    let myVariable2 = 20;

    return myVariable1 + myVariable2;
}