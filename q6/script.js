let my_time='';
let goDown = true;
let goUp = false;
let goLeft = false;
let goRight = false;
let allow = true;

function reset1(){
clearTimeout(my_time);
document.getElementById('i1').style.left= "300px";
document.getElementById('i1').style.top= "100px";
    goDown = true;
    goUp = false;
    goLeft = false;
    goRight = false;
    allow = true;
}

function pause(){
    clearTimeout(my_time);
}

function disp(){
var step=1; 
var y=document.getElementById('i1').offsetTop;
var x=document.getElementById('i1').offsetLeft;
console.log(x, y);
if(y < 400 && goDown){
    y= y +step;
    document.getElementById('i1').style.top= y + "px"; 
    if(y == 400){
        goUp = true
        goDown = false;
    }
}
if(y>200 && goUp){
    y=y-step;
    document.getElementById('i1').style.top = y + 'px';
    if(y == 200){
        goUp = false;
        goLeft = true
    }
}
if(x > 150  && goLeft && allow){
    x=x-step;
    document.getElementById('i1').style.left = x + 'px';
    if(x == 150){
        goLeft = false;
        goRight = true;
    }
}

if(x < 450 && goRight){
    x+=step;
    document.getElementById('i1').style.left = x + 'px';
    if(x == 450){
        goRight = false;
        goLeft = true;
        allow = false;
    }
}
if(x >300 && goLeft && !allow){
    x-=step;
    document.getElementById('i1').style.left = x + 'px';
    if(x == 300){
        goUp = true;
        goLeft = false;
    }
}
if(y > 100 && goUp && !allow){
    y-=step;
    document.getElementById('i1').style.top = y + 'px';
    if(y == 100){
        reset1();
    }
}

}
// else{
// if(x < 800){x= x +step;
// document.getElementById('i1').style.left= x + "px";
//         }
//     }
// }

function timer(){
disp();
my_time=setTimeout('timer()',10);
}
