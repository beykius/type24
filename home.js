let posts = [];

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => {
    const grid = document.querySelector('.grid');
    for (let i = 0; i < 50; i++) {
        posts.push(data[i])
        console.log(posts)
        grid.innerHTML += `
        <div class="post">
        <div class="title">${data[i].title}</div>
        <div class="post-body">${data[i].body}</div>
        </div>`;

    }

const allPosts = document.querySelectorAll('.post');
    allPosts.forEach((x, index) => {
        x.onclick = () => {
            localStorage.setItem("post_id", posts[index].id);
            window.location.href = `post.html?id=${posts[index].id}`;
        }
    })

})
