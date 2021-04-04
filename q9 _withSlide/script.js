
function changeKey(){
    let keyList = document.querySelectorAll('.key');
    for(let i =0;i<keyList.length;i++){
        keyList[i].innerHTML = key;
    }
}

class sliderFunctions{
    moveOneStepFront = function(slider){
        let step = 50 ;
        if(parseInt(slider.style.left) <= 780){
            slider.style.left = parseInt(slider.style.left) + 120 + 'px';
            key++;
           changeKey(); 
        }
        if(parseInt(slider.style.left >780))
            slider.style.left = 780 + 'px';
        console.log(slider.style.left);
    }

    moveOneStepBack = function(slider){
        let step = 50;
        if(parseInt(slider.style.left) > 300){
            slider.style.left = parseInt(slider.style.left) - 120 + 'px';
            key--;
            changeKey();
        }
        if(parseInt(slider.style.left < 300)){
            slider.style.left = 300 + 'px';
        }
        console.log(slider.style.left);
    }

    moveFullStepBack = function(slider){
        slider.style.left = 300 + 'px';
        key = 1;
        changeKey();
    }

    moveFullStepFront = function(){
        slider.style.left = 900 + 'px';
        key = 6;
        changeKey();
    }
    moveTo = function(slider, k, leftPos){
        slider.style.left = leftPos + 'px';
        key = k;
        changeKey();
    }
    slide = function(e){
        giveSlide(e);
    };
}


let ftns = new sliderFunctions();
let slider =  document.querySelector('.toolbarbutton');
let key = 1;
changeKey();

slider.style.left = 300 +'px';

function giveSlide(e){
    e.preventDefault();
    let shiftX = e.clientX - slider.getBoundingClientRect().left;

    document.addEventListener('mousemove',onMouseMove);
    document.addEventListener('mouseup',onMouseUp);

    function onMouseMove(e){
        let newL = e.clientX - shiftX - mid.getBoundingClientRect().left + 290;
        if(newL < 0)
            newL = 0;
        if(newL < 290)
            newL = 290;
        if(newL > 896)
            newL = 910;
        let x = newL;
        if(x > 290 && x < 420)
                ftns.moveTo(slider, 1, 300);
        else if(x >420 && x < 530)
                ftns.moveTo(slider, 2, 420);
        else if(x >530 && x < 650)
                ftns.moveTo(slider, 3, 540);
        else if(x > 650 && x<775)
                ftns.moveTo(slider, 4, 660);
        else if(x >775 && x < 896)
                ftns.moveTo(slider, 5, 780);
        else if(x >896 )
                ftns.moveTo(slider, 6, 900);   

                slider.style.left = newL + 'px';
    }

    function onMouseUp(e){
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

}
slider.onmousedown = function(e){
    ftns.slide(e);
}

next.onclick = function(){
    ftns.moveOneStepFront(slider);
}
document.querySelector('.Menubutton_lft').onclick = function(){
    ftns.moveOneStepFront(slider);
}
prev.onclick = function(){
    ftns.moveOneStepBack(slider);
}
document.querySelector('.Menubutton_rht').onclick = function(){
    ftns.moveOneStepBack(slider);
}
fullPrev.onclick = function(){
    ftns.moveFullStepBack(slider);
}
fullNext.onclick = function(){
    ftns.moveFullStepFront(slider);
}




mid.onclick = function(e){
    let x = e.clientX - 200;
    if(x > 290 && x < 420){
        ftns.moveTo(slider, 1, 300);
    }
    else if(x >420 && x < 530)
        ftns.moveTo(slider, 2, 420);
    else if(x >530 && x < 650)
        ftns.moveTo(slider, 3, 540);
    else if(x > 650 && x<775)
        ftns.moveTo(slider, 4, 660);
    else if(x >775 && x < 896)
        ftns.moveTo(slider, 5, 780);
    else if(x >896 )
        ftns.moveTo(slider, 6, 900);   
    // alert(x);
}