const post_id = localStorage.getItem("post_id");


fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    .then(response => response.json())
    .then(data => {
        const grid = document.querySelector('.grid')
        grid.innerHTML = `
        <div class="post">
        <div class="title">${data.title}</div>
        <div class="post-body">${data.body}</div>
        </div>`;
        })