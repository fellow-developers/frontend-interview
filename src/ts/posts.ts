interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function getPosts(): Promise<Array<Post>> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return response.json();
}

window.onload = async () => {
    const listContainer = document.querySelector('ul.list')!;

    const posts = await getPosts();
    posts.forEach(post => {
        const postTile = document.createElement('li');
        postTile.id = post.id.toString();
        postTile.className = 'tile';

        const postTitle = document.createElement('h2');
        postTitle.className = 'title';
        postTitle.innerText = post.title;

        const postDescription = document.createElement('p');
        postDescription.className = 'description';
        postDescription.innerText = post.body;

        postTile.append(postTitle, postDescription);
        listContainer.appendChild(postTile);
    });
}