
function load_file(file){
    console.log(`file name: ${file}`);
    fetch(file)
    .then(response => response.json())
    .then(data => {
        Object.entries(data).forEach(([key, value]) => {
            document.getElementById(key).textContent = value
        });
    })
    .catch(error => console.error('Error fetching data:', error));
}
    


