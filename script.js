const pElements = document.getElementsByClassName('two');
const btnEle = document.getElementById('myButton')
let numEle = null


function handleClick(event) {
    const pElement = event.target;
    numEle = pElement.getAttribute('value')
    console.log(numEle)

}

for (let i = 0; i < pElements.length; i++) {
    const pElement = pElements[i];
    pElement.addEventListener('click', handleClick);  
}
btnEle.addEventListener('click', saveNum)

function saveNum(){
    if(!numEle){
        console.log("sometthing is missing")
    }
    else{
        console.log(numEle)
        localStorage.setItem('theNumber',JSON.stringify(numEle));
        window.location.assign('thankyou.html')
        // theAttri
    }
   
    // console.log(theAttri);
}