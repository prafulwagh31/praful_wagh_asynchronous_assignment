document.getElementById('promiseButton').addEventListener('click', function() {
    document.getElementById('promiseResult').innerText = 'Loading...';
    fetchDataWithPromise()
        .then(posts => {
            document.getElementById('promiseResult').innerHTML = posts;
        })
        .catch(error => {
            document.getElementById('promiseResult').innerText = error;
        });
});

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        const timeout = setTimeout(() => {
            reject('Operation timed out');
        }, 5000);

        fetch('https://dummyjson.com/posts')
            .then(response => response.json())
            .then(data => {
                clearTimeout(timeout);
                let posts = data.posts.map(post => post.title).join('<br>');
                resolve(posts);
            })
            .catch(error => {
                clearTimeout(timeout);
                reject('Error fetching data');
            });
    });
}
