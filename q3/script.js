
let submit = document.querySelector('#SUBMIT');

function focus(field){
    field.onfocus = function(){
        if(popUps.classList.contains('error')){
            popUps.classList.remove('error');
            popUps.innerHTML = '';
    }
    }
}

fullName.onblur = function(){
    let d = /[^a-zA-z]+/;
    if(fullName.value.match(d)){
        popUps.classList.add('error');
        popUps.innerHTML = 'Name should contain only letters';
        focus(fullName);
    }
}


function enterInput(){
    let entry = document.createElement('DIV');
    entry.classList.add('inputForm');
    let sex = document.getElementsByName('gender');
    let sexVal = '';
    for(let i = 0;i<sex.length;i++)
        if(sex[i].checked){
            sexVal = sex[i].id;
            sex[i].checked = !sex[i].checked
            // console.log(sex[i].id)
        }
    entry.innerHTML= `<ul>Name : ${fullName.value}</ul><ul>DOB :${DOB.value}</ul><ul>Sex : ${sexVal}</ul><ul>Phone Number :${Phone.value}</ul>`;
    entry.style.cssText = 'margin-top : 30px'
    entry.classList.add('inputForm');
    entries.appendChild(entry);
    fullName.value ='';
    DOB.value = '';
    Phone.value = '';
    console.log(entries);

}

submit.onclick = function(e){
    e.preventDefault();    
    if(fullName.value == ''){
        popUps.classList.add('error');
        popUps.innerHTML = 'Name should be filled'
        focus(fullName);
    }else if(DOB.value == ''){
        popUps.classList.add('error');
        popUps.innerHTML = 'DOB should be filled'
        focus(DOB);
    }else if(Phone.value == ''){
        popUps.classList.add('error');
        popUps.innerHTML = 'Enter Number';
        focus(Phone);
    }else if(Phone.value.length != 10){
        popUps.classList.add('error');
        popUps.innerHTML = 'Number length should be <= 10';
        focus(Phone);
    }else{
        enterInput();
        }
}
