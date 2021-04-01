// document.cookie = "Mozilla=0"

console.log(document.cookie)


function getName(){
    return navigator.appVersion.substring(79, 85)
}

function setCount(){
    let browserName = getName();

    let cookieArr = document.cookie.split(';');
    console.log(cookieArr);

    for(let i =0 ; i<cookieArr.length;i++){
        let cookiePair = cookieArr[i].split('=');
        if(browserName == cookiePair[0].trim()){
            let count = parseInt(cookiePair[1].trim());
            count++;
            document.cookie = browserName+"="+count;
        }
    }

}

function writeVisited(){
    let cookieArr = document.cookie.split(';');
    for(let i=0;i<cookieArr.length;i++){
        let li = document.createElement('LI');
        li.innerHTML = cookieArr[i];
        counts.appendChild(li);
    }
     

 
}

document.body.onload = setCount();
writeVisited();