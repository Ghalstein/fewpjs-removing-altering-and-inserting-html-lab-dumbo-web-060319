// Write your code here!
document.querySelector('#main').remove();

let newHeader = document.createElement('h1');
document.body.appendChild(newHeader);

newHeader.setAttribute('id', 'victory');

newHeader.innerHTML = 'YOUR-NAME is the champion';
