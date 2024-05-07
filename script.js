import Swup from 'swup'
const pElements = document.getElementsByClassName('two');
const btnEle = document.getElementById('myButton');
let chosenNum = document.getElementById('choosen-numbers');
let errorMessage = document.getElementById('errormessage');
let numEle = null

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
        errorMessage.textContent = `Something is missing`
    }
    else{
        console.log(numEle)
        localStorage.setItem('theNumber', numEle);
        
        window.location.assign('thankyou.html')
    }
}
// new page
function displayNum(){
    let returnednumber = localStorage.getItem('theNumber')
    chosenNum.textContent = `you selected ${returnednumber} out of 5`
    if(!returnednumber){
        console.log("not ready")
    }
    else{
        console.log(returnednumber)
    }
   
    
}
window.addEventListener('load', displayNum)

// sliding
const swup = new Swup()