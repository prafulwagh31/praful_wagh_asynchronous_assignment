document.getElementById('asyncButton').addEventListener('click', async function() {
    document.getElementById('asyncResult').innerText = 'Loading...';
    try {
        let posts = await fetchDataWithAsyncAwait();
        document.getElementById('asyncResult').innerHTML = posts;
    } catch (error) {
        document.getElementById('asyncResult').innerText = error;
    }
});

async function fetchDataWithAsyncAwait() {
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject('Operation timed out'), 5000);
    });

    try {
        let response = await Promise.race([
            fetch('https://dummyjson.com/posts').then(res => res.json()),
            timeoutPromise
        ]);

        let posts = response.posts.map(post => post.title).join('<br>');
        return posts;
    } catch (error) {
        throw 'Error fetching data';
    }
}
