
const pElements = document.getElementsByClassName('two');


function handleClick(event) {
    const pElement = event.target;
    console.log(pElement.getAttribute('value'));
}


for (let i = 0; i < pElements.length; i++) {
    const pElement = pElements[i];
    pElement.addEventListener('click', handleClick);
}
