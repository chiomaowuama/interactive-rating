const pElements = document.getElementsByClassName('two');
const btnEle = document.getElementById('myButton');
let chosenNum = document.getElementById('choosen-numbers');
let numEle = null
let returnednumber = null

function handleClick(event) {
    const pElement = event.target;
    numEle = pElement.getAttribute('value')
}

for (let i = 0; i < pElements.length; i++) {
    const pElement = pElements[i];
    pElement.addEventListener('click', handleClick);  
    btnEle.addEventListener('click', saveNum);
}
function saveNum(){
    if(!numEle){
        console.log("sometthing is missing")
    }
    else{
        // console.log(numEle)
        localStorage.setItem('theNumber', numEle);
        returnednumber = localStorage.getItem('theNumber')
        // window.location.assign('thankyou.html')
    }
}
// chosenNum.addEventListener('DOMContentLoaded', displayNum)
function displayNum(){
    console.log("yes")
  
}

