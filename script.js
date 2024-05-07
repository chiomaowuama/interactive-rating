
const pElements = document.getElementsByClassName('two');
const btnEle = document.getElementById('myButton')


function handleClick(event) {
    const pElement = event.target;
    const theAttri = pElement.getAttribute('value')
    console.log(theAttri)
    // if(!theAttri){
    //     alert('please rate us')
    // }else{

    //     saveNum(theAttri)
    // }
}


for (let i = 0; i < pElements.length; i++) {
    const pElement = pElements[i];
    pElement.addEventListener('click', handleClick);
    
   
}
btnEle.addEventListener('click', saveNum)

function saveNum(theAttri){
    console.log(theAttri)
}