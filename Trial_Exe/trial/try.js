// var calc = {
//     sum : function(a, b){
//         return parseInt(a) + parseInt(b);
//     },
//     mul : function(a, b){
//         return a*b;
//     },
//     change : function(){
//         document.getElementById("demo").innerHTML = `Ans is ${calc.sum(calc.c1, calc.c2)}`
//     }
// }
// calc.c1 = prompt("v1");
// calc.c2 = prompt("v2");

// const btn = document.getElementById("demo2");
// const btn2 = document.getElementById("demo3");
// btn.addEventListener("click", calc.change);
// btn2.addEventListener("click", ()=> {document.getElementById("demo").innerHTML = `Ans is ${calc.mul(calc.c1, calc.c2)}`});


// console.log(calc.mul(calc.c1, calc.c2));
// console.log(calc.sum(calc.c1, calc.c2));
// ----------------------------------------------------------------------------------------------------------------------------------
// const req = new XMLHttpRequest();

// req.addEventListener("readystatechange", ()=>{
//     if( req.readyState === 4){
//         // console.log(req.responseText);
//         document.getElementById("demo").innerHTML = req.response
//     }
// });

// req.open('GET', "https://jsonplaceholder.typicode.com/todos/");
// req.send();

// ----------------------------------------------------------------------------------------------------------------------------------

let newEle = document.createElement('TH')
let node = document.createTextNode('Year');
newEle.appendChild(node);
document.getElementById('topics').appendChild(newEle);
// console.log(newEle);

newEle = document.createElement('TD');
node = document.createTextNode('2024');
newEle.appendChild(node);
document.getElementById('sub_topics').appendChild(newEle);

// let table = document.getElementById('t').getElementsByTagName('tbody')[0];
// let nRow = table.insertRow();
// let nCell = nRow.insertCell();
// let nCell2 = nRow.insertCell();
// let nCell3 = nRow.insertCell();


// nCell.appendChild(document.createTextNode('Ajay'));
// nCell2.appendChild(document.createTextNode('20'));
// nCell3.appendChild(document.createTextNode('20'));

let newRow = document.createElement('TR');
newRow.innerHTML = '<td>Ajay</td><td>22</td><td>2020</td>';
document.getElementById('body').appendChild(newRow);
let newRow2 = document.createElement('TR');
newRow2.innerHTML = '<td>Vint</td><td>20</td><td>2024</td>';
document.getElementById('body').appendChild(newRow2);

t.onclick = function(e){
    if(e.target.tagName == 'TH'){
        let Arraylist = Array.from(body.rows);
        let th = e.target;
        console.log(th.cellIndex)

        let compare = function(R1, R2){
            return R1.cells[th.cellIndex].innerHTML - R2.cells[th.cellIndex].innerHTML;
        }

        Arraylist.sort(compare);
        console.log(Arraylist)
        body.append(...Arraylist)
        console.log(Arraylist);
    }
}


// console.log(newRow);
//----------------------------------------------------------------

let notification = document.createElement('UL');
notification.innerHTML = '<h1>Hello</h1>';

notification.classList.add('notification');
document.body.appendChild(notification);

setTimeout(()=>{notification.remove()}, 1500)
console.log(notification);
//----------------------------------------------------------------

let ele = document.querySelector('.para');

console.log(getComputedStyle(ele).width);

let moveDown = document.querySelector('.moveDown');
moveDown.addEventListener("click",()=>{
    document.querySelector('.para').scrollTop+=10;
});

let moveUp = document.querySelector('.moveUp');
moveUp.addEventListener('hover', ()=>{
    document.querySelector('.para').scrollLeft+=10;
});
console.log(moveDown);

//----------------------------------------------------------------
document.addEventListener('DOMContentLoaded', ()=>{
    alert("Hello");
})