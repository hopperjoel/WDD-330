<<<<<<< HEAD

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then(response => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.text())
    .then(text => outputDiv.innerText = text)
    .catch(error => console.log('Error in the request:', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.value)
    .catch(error => console.log('Error in the Chuck request:', error))
=======

const textButton = document.getElementById('number');
const apiButton = document.getElementById('chuck');
const outputDiv = document.getElementById('output');

const textURL = 'http://numbersapi.com/random';
const apiURL = 'https://api.chucknorris.io/jokes/random';

textButton.addEventListener('click', () => {
    fetch(textURL)
    .then(response => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.text())
    .then(text => outputDiv.innerText = text)
    .catch(error => console.log('Error in the request:', error))
}, false);

apiButton.addEventListener('click', () => {
    fetch(apiURL)
    .then(response => {
        if (response.ok) {
            return response;
        }
        throw Error(response.statusText);
    })
    .then(response => response.json())
    .then(data => outputDiv.innerText = data.value)
    .catch(error => console.log('Error in the Chuck request:', error))
>>>>>>> 26448f4480a547355694717792b9683ceceba345
}, false);