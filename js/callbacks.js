document.getElementById('callbackButton').addEventListener('click', function() {
    displayAfterDelay(fetchData, 5000);
});

function displayAfterDelay(callback, delay) {
    setTimeout(callback, delay);
}

function fetchData() {
    fetch('https://dummyjson.com/posts')
        .then(response => response.json())
        .then(data => {
            let posts = data.posts.map(post => `${post.title}`).join('<br>');
            document.getElementById('callbackResult').innerHTML = posts;
        })
        .catch(error => {
            document.getElementById('callbackResult').innerText = 'Error fetching data';
        });
}
