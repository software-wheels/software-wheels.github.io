const urlParams = new URLSearchParams(window.location.search);
const file = urlParams.get('file');
console.log(`file name: ${file}`);

fetch(file)
    .then(response => response.json())
    .then(data => {
        document.getElementById('welcome').textContent = data.welcomeMessage;
        document.getElementById('about').textContent = data.aboutText;
    })
    .catch(error => console.error('Error fetching data:', error));