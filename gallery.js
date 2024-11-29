const gridPhotos = document.querySelector('.gridPhotos')


fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 24; i++) {
            gridPhotos.innerHTML += `
        <div class="photosContainer">
        <img src="${data[i].url}" alt="${data[i].title}">
        </div>`;
        }})
