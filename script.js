
const pElements = document.getElementsByClassName('two');


function handleClick(event) {
    const pElement = event.target;
    const theAttri = pElement.getAttribute('value')
    console.log(theAttri);
}


for (let i = 0; i < pElements.length; i++) {
    const pElement = pElements[i];
    pElement.addEventListener('click', handleClick);
}
